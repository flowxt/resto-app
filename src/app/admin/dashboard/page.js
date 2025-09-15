'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AdminLayout from '@/components/AdminLayout'
import ReservationCard from '@/components/ReservationCard'

export default function AdminDashboard() {
  const [reservations, setReservations] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [stats, setStats] = useState({
    today: { total: 0, confirmed: 0, pending: 0 },
    midi: { total: 0, remaining: 0 },
    soir1: { total: 0, remaining: 0 },
    soir2: { total: 0, remaining: 0 }
  })
  const router = useRouter()

  useEffect(() => {
    // Vérifier l'authentification
    if (typeof window !== 'undefined' && !localStorage.getItem('adminAuth')) {
      router.push('/admin')
      return
    }
    
    fetchReservations()
  }, [selectedDate])

  const fetchReservations = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/admin/reservations?date=${selectedDate}`)
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement')
      }

      const data = await response.json()
      setReservations(data.reservations || [])
      setStats(data.stats || stats)
    } catch (error) {
      console.error('Erreur:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateReservationStatus = async (reservationId, newStatus) => {
    try {
      const response = await fetch(`/api/admin/reservations/${reservationId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      })

      if (response.ok) {
        // Recharger les réservations
        fetchReservations()
      }
    } catch (error) {
      console.error('Erreur mise à jour:', error)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'CONFIRMED': return 'bg-green-100 text-green-800'
      case 'CANCELLED': return 'bg-red-100 text-red-800'
      case 'COMPLETED': return 'bg-blue-100 text-blue-800'
      default: return 'bg-orange-100 text-orange-800'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'PENDING': return 'En attente'
      case 'CONFIRMED': return 'Confirmée'
      case 'CANCELLED': return 'Annulée'
      case 'COMPLETED': return 'Terminée'
      default: return status
    }
  }

  const groupReservationsByTime = (reservations) => {
    const grouped = {
      midi: [],
      soir1: [],
      soir2: []
    }

    reservations.forEach(reservation => {
      const [hours] = reservation.time.split(':').map(Number)
      
      if (hours >= 11 && hours <= 14) {
        grouped.midi.push(reservation)
      } else if (hours >= 19 && hours < 20.5) {
        grouped.soir1.push(reservation)
      } else if (hours >= 20.5 && hours <= 22) {
        grouped.soir2.push(reservation)
      }
    })

    return grouped
  }

  const groupedReservations = groupReservationsByTime(reservations)

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-chalet-wood mx-auto mb-4"></div>
            <p className="text-nude-600">Chargement des réservations...</p>
          </div>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* En-tête avec sélecteur de date */}
        <div className="bg-nude-50 rounded-lg p-6 border border-nude-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-heading text-2xl font-bold text-nude-900">
                Réservations du jour
              </h1>
              <p className="font-body text-nude-600">
                Gérez vos réservations et suivez l'occupation
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-2 border border-nude-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chalet-wood bg-white text-nude-900"
              />
              <button
                onClick={() => setSelectedDate(new Date().toISOString().split('T')[0])}
                className="px-4 py-2 bg-chalet-wood text-nude-50 rounded-md hover:bg-nude-800 font-ui text-sm"
              >
                Aujourd'hui
              </button>
            </div>
          </div>
        </div>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-nude-50 p-4 rounded-lg border border-nude-200">
            <h3 className="font-ui font-semibold text-nude-700 text-sm">Total du jour</h3>
            <p className="font-heading text-2xl font-bold text-nude-900">{stats.today.total}</p>
            <p className="font-body text-sm text-nude-600">réservations</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-ui font-semibold text-green-700 text-sm">Confirmées</h3>
            <p className="font-heading text-2xl font-bold text-green-800">{stats.today.confirmed}</p>
            <p className="font-body text-sm text-green-600">validées</p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h3 className="font-ui font-semibold text-orange-700 text-sm">En attente</h3>
            <p className="font-heading text-2xl font-bold text-orange-800">{stats.today.pending}</p>
            <p className="font-body text-sm text-orange-600">à traiter</p>
          </div>
          
          <div className="bg-chalet-warm/20 p-4 rounded-lg border border-chalet-warm/30">
            <h3 className="font-ui font-semibold text-chalet-wood text-sm">Occupation</h3>
            <p className="font-heading text-2xl font-bold text-nude-900">
              {stats.today.total > 0 ? Math.round((stats.today.confirmed / stats.today.total) * 100) : 0}%
            </p>
            <p className="font-body text-sm text-nude-600">du jour</p>
          </div>
        </div>

        {/* Réservations par service */}
        <div className="space-y-6">
          {/* Service Midi */}
          <div className="bg-nude-50 rounded-lg p-6 border border-nude-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-xl font-semibold text-nude-900">
                Service Midi (11h30-14h)
              </h2>
              <span className="px-3 py-1 bg-chalet-warm/20 text-chalet-wood rounded-full text-sm font-ui">
                {groupedReservations.midi.length} réservations
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {groupedReservations.midi.length > 0 ? (
                groupedReservations.midi.map(reservation => (
                  <ReservationCard
                    key={reservation.id}
                    reservation={reservation}
                    onStatusUpdate={updateReservationStatus}
                    getStatusColor={getStatusColor}
                    getStatusText={getStatusText}
                  />
                ))
              ) : (
                <p className="col-span-full text-nude-600 text-center py-8 font-body">
                  Aucune réservation pour le service midi
                </p>
              )}
            </div>
          </div>

          {/* Service Soir 1 */}
          <div className="bg-nude-50 rounded-lg p-6 border border-nude-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-xl font-semibold text-nude-900">
                Service Soir 1 (19h-20h30)
              </h2>
              <span className="px-3 py-1 bg-chalet-warm/20 text-chalet-wood rounded-full text-sm font-ui">
                {groupedReservations.soir1.length} réservations
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {groupedReservations.soir1.length > 0 ? (
                groupedReservations.soir1.map(reservation => (
                  <ReservationCard
                    key={reservation.id}
                    reservation={reservation}
                    onStatusUpdate={updateReservationStatus}
                    getStatusColor={getStatusColor}
                    getStatusText={getStatusText}
                  />
                ))
              ) : (
                <p className="col-span-full text-nude-600 text-center py-8 font-body">
                  Aucune réservation pour le 1er service
                </p>
              )}
            </div>
          </div>

          {/* Service Soir 2 */}
          <div className="bg-nude-50 rounded-lg p-6 border border-nude-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-xl font-semibold text-nude-900">
                Service Soir 2 (20h30-22h)
              </h2>
              <span className="px-3 py-1 bg-chalet-warm/20 text-chalet-wood rounded-full text-sm font-ui">
                {groupedReservations.soir2.length} réservations
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {groupedReservations.soir2.length > 0 ? (
                groupedReservations.soir2.map(reservation => (
                  <ReservationCard
                    key={reservation.id}
                    reservation={reservation}
                    onStatusUpdate={updateReservationStatus}
                    getStatusColor={getStatusColor}
                    getStatusText={getStatusText}
                  />
                ))
              ) : (
                <p className="col-span-full text-nude-600 text-center py-8 font-body">
                  Aucune réservation pour le 2e service
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

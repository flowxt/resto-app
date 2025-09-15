const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Initialisation des créneaux du restaurant...')

  // 🧹 Nettoyer les créneaux existants
  await prisma.timeSlot.deleteMany()
  
  // 🍽️ CRÉNEAUX MIDI (11h30-14h) - 80 places (restaurant + bar à fromage)
  const midiSlots = [
    '11:30', '11:45', '12:00', '12:15', '12:30', '12:45', 
    '13:00', '13:15', '13:30', '13:45', '14:00'
  ]
  
  for (const time of midiSlots) {
    await prisma.timeSlot.create({
      data: {
        time: time,
        maxTables: 20, // 80 places ÷ 4 personnes par table en moyenne = 20 tables
        isActive: true
      }
    })
    console.log(`✅ Créneau midi créé: ${time} (20 tables max)`)
  }

  // 🌙 CRÉNEAUX SOIR 1er SERVICE (19h-20h15) - 40 places restaurant
  const soir1Slots = [
    '19:00', '19:15', '19:30', '19:45', '20:00', '20:15'
  ]
  
  for (const time of soir1Slots) {
    await prisma.timeSlot.create({
      data: {
        time: time,
        maxTables: 10, // 40 places ÷ 4 personnes = 10 tables
        isActive: true
      }
    })
    console.log(`✅ Créneau soir 1er service: ${time} (10 tables max)`)
  }

  // 🌃 CRÉNEAUX SOIR 2e SERVICE (20h30-22h) - 40 places restaurant  
  const soir2Slots = [
    '20:30', '20:45', '21:00', '21:15', '21:30', '21:45', '22:00'
  ]
  
  for (const time of soir2Slots) {
    await prisma.timeSlot.create({
      data: {
        time: time,
        maxTables: 10, // 40 places ÷ 4 personnes = 10 tables
        isActive: true
      }
    })
    console.log(`✅ Créneau soir 2e service: ${time} (10 tables max)`)
  }

  // 🚫 Ajouter le lundi comme jour fermé (exemple)
  const nextMonday = new Date()
  nextMonday.setDate(nextMonday.getDate() + (1 + 7 - nextMonday.getDay()) % 7)
  
  await prisma.blockedDate.create({
    data: {
      date: nextMonday,
      reason: "Fermeture hebdomadaire - Lundi"
    }
  })
  console.log(`🚫 Lundi bloqué: ${nextMonday.toLocaleDateString()}`)

  console.log('🎉 Base de données initialisée avec succès!')
  console.log('📊 Résumé:')
  console.log(`   • ${midiSlots.length} créneaux midi (20 tables chacun)`)
  console.log(`   • ${soir1Slots.length} créneaux soir 1er service (10 tables chacun)`)
  console.log(`   • ${soir2Slots.length} créneaux soir 2e service (10 tables chacun)`)
  console.log('   • Lundis fermés')
}

main()
  .catch((e) => {
    console.error('❌ Erreur:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Pour simplifier, on utilise des identifiants en dur
      // En production, vous voudrez une vraie authentification
      if (
        formData.username === "admin" &&
        formData.password === "restaurant2024"
      ) {
        // Stocker une session simple
        localStorage.setItem("adminLoggedIn", "true");
        router.push("/admin/dashboard");
      } else {
        setError("Identifiants incorrects");
      }
    } catch (err) {
      setError("Erreur de connexion");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-nude-100 via-nude-50 to-chalet-warm/20 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo et titre */}
        <div className="text-center mb-8">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="/images/logo.png"
              alt="Logo Restaurant"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="font-heading text-3xl font-bold text-nude-900 mb-2">
            Administration
          </h1>
          <p className="font-body text-nude-700">Gestion des réservations</p>
        </div>

        {/* Formulaire de connexion */}
        <div className="bg-nude-50 rounded-lg shadow-xl border border-nude-200 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-ui font-medium text-nude-800 mb-2"
              >
                Nom d&apos;utilisateur
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-nude-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chalet-wood focus:border-chalet-wood bg-white text-nude-900"
                placeholder="admin"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-ui font-medium text-nude-800 mb-2"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-nude-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chalet-wood focus:border-chalet-wood bg-white text-nude-900"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-md font-ui font-semibold transition-all duration-300 ${
                isLoading
                  ? "bg-nude-400 cursor-not-allowed"
                  : "bg-chalet-wood hover:bg-nude-800 focus:ring-2 focus:ring-chalet-wood focus:ring-offset-2"
              } text-nude-50`}
            >
              {isLoading ? "Connexion..." : "Se connecter"}
            </button>
          </form>

          {/* Informations de test */}
          <div className="mt-6 p-4 bg-chalet-warm/10 rounded-md border border-chalet-warm/20">
            <p className="text-sm font-ui text-nude-700 text-center">
              <strong>Identifiants de test :</strong>
              <br />
              Utilisateur :{" "}
              <code className="bg-nude-200 px-1 rounded">admin</code>
              <br />
              Mot de passe :{" "}
              <code className="bg-nude-200 px-1 rounded">restaurant2024</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

# 🚀 Guide de Déploiement - Resto App

## Variables d'environnement requises

Créez un fichier `.env` avec ces variables :

```bash
# 🗄️ Base de données PostgreSQL (Neon)
DATABASE_URL="postgresql://username:password@ep-xxx.eu-central-1.aws.neon.tech/neondb?sslmode=require"

# 🔐 Clé secrète pour l'admin
ADMIN_SECRET="votre-mot-de-passe-admin-super-secret"

# 🌐 URL de base de l'application
NEXT_PUBLIC_BASE_URL="https://votre-app.vercel.app"
```

## Étapes de déploiement

1. **Neon Database** : Créer la base PostgreSQL
2. **Vercel** : Déployer l'application
3. **Migration** : Migrer les données
4. **Test** : Vérifier le fonctionnement

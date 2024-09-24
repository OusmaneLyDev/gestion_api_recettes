# Étape 1 : Construction de l'application avec Node.js
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Si vous n'avez pas besoin de construire le projet, retirez la commande suivante :
# RUN npm run build

# Étape 2 : Serveur NGINX pour déployer l'application
FROM nginx:alpine
# Modifiez le chemin à copier selon vos fichiers
COPY --from=build /app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

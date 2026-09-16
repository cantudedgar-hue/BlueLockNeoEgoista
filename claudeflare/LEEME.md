# BL Ranking — hosteo privado con Cloudflare Tunnel

Esta carpeta ya trae:
- `index.html` → tu página tal cual la subiste.
- `server.js` → mini-servidor con usuario/contraseña.
- `package.json` → dependencias.

## 1. Instalar Node.js
Si no lo tienes: descarga el instalador LTS desde https://nodejs.org e instálalo (Next, Next, Finish).
Verifica en una terminal (CMD / PowerShell / Terminal):
```
node -v
npm -v
```

## 2. Instalar las dependencias del servidor
Abre una terminal **dentro de esta carpeta** (`ranking-privado`) y corre:
```
npm install
```

## 3. Cambiar el usuario y contraseña
Abre `server.js` y edita estas dos líneas con tus propios datos:
```js
const USUARIO = 'admin';
const PASSWORD = 'cambia-esta-clave';
```
Guarda el archivo.

## 4. Levantar el servidor local
```
npm start
```
Deberías ver:
```
Servidor privado corriendo en http://localhost:3000
```
Pruébalo abriendo `http://localhost:3000` en tu navegador — te va a pedir usuario/contraseña.

## 5. Instalar cloudflared (el túnel de Cloudflare)
- **Windows:** `winget install --id Cloudflare.cloudflared`
- **Mac:** `brew install cloudflared`
- **Linux (Debian/Ubuntu):**
  ```
  curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb -o cloudflared.deb
  sudo dpkg -i cloudflared.deb
  ```

## 6. Abrir el túnel (con la página ya corriendo en el paso 4)
En **otra terminal**, corre:
```
cloudflared tunnel --url http://localhost:3000
```
Te va a dar una línea con un link tipo:
```
https://algo-random-aqui.trycloudflare.com
```
Ese es tu sitio público. Compártelo solo con quien deba entrar, junto con el usuario/contraseña del paso 3.

## Notas importantes
- El link de `trycloudflare.com` **cambia cada vez** que apagas y prendes el túnel (es un túnel "rápido", gratis, sin dominio propio). Si algún día quieres un link fijo, necesitas comprar un dominio y agregarlo a Cloudflare (túnel "nombrado").
- Mientras la terminal del túnel esté abierta, el sitio está en línea. Ciérrala (Ctrl+C) para apagarlo.
- El login (usuario/contraseña) evita que gente sin invitación entre. Pero quien sí entra puede ver el código fuente con F12 — no hay forma real de evitarlo en una página web normal, así que no compartas la contraseña con nadie en quien no confíes.
- Nunca subas esta carpeta (con tu contraseña real) a un repositorio público de GitHub.

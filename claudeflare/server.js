// Servidor privado para BL Ranking
// Sirve index.html protegido con usuario/contraseña.

const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');

const app = express();

// ====== CAMBIA ESTO ANTES DE PUBLICAR ======
const USUARIO = 'onlytrans';
const PASSWORD = 'miocardio';
// ============================================

app.use(basicAuth({
  users: { [USUARIO]: PASSWORD },
  challenge: true,           // hace que el navegador muestre el cuadro de login
  realm: 'BL Ranking Privado'
}));

// Evita que el sitio se cachee/guarde fácilmente en el navegador
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.set('X-Frame-Options', 'DENY'); // evita que lo carguen embebido en otra pagina
  next();
});

app.use(express.static(path.join(__dirname), { index: 'index.html' }));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor privado corriendo en http://localhost:${PORT}`);
  console.log(`Usuario: ${USUARIO}`);
});

# ⛩️ Guía de Confguración Discord: Kokoro 3 Souls

Esta guía está diseñada para crear una comunidad híbrida: Fans del videojuego + Equipo de Producción y Casting.

---

## 🎭 1. Estructura de Roles (Jerarquía)

Es vital configurar esto primero para separar a los fans del staff profesional.

1.  **👑 KOKORO DEV** (Admin / Tú) - *Permisos totales.*
2.  **🎬 PRODUCCIÓN** (Staff, Directores de Casting, Fotógrafos confirmados) - *Acceso a canales privados de staff.*
3.  **💃 ELENCO / ACTRICES** (Actrices seleccionadas) - *Distinción visual y acceso a zonas de ensayo/privadas.*
4.  **🖌️ TALENTO** (Maquillistas, Fotógrafos, Editores interesados o confirmados).
5.  **🌟 SOUL (VIP)** (Patreons, Boosters del servidor, Fans destacados).
6.  **👤 JUGADOR** (Rol por defecto para todos los que entran).
7.  **🤖 BOTS** (Para MEE6, Ticket Tool, etc.).

---

## 🏛️ 2. Arquitectura de Categorías y Canales

Copia y pega estos nombres para mantener la estética.

### **CATEGORÍA 1: ⛩️ HALL DE ENTRADA (Público)**
*El primer impacto. Debe ser limpio y profesional.*
*   `📜│reglas` (Solo lectura. Reglas de convivencia y de confidencialidad para el casting).
*   `🎭│auto-roles` (Usa un bot como Carl-bot).
    *   *Reacciona 🎮 para ver canales de Gaming.*
    *   *Reacciona 🎬 para ver canales de Casting/Trabajo.*
*   `📢│anuncios` (Novedades del desarrollo).
*   `👋│bienvenida` (Mensajes automáticos de "Hola @Usuario").

### **CATEGORÍA 2: 🌸 KOKORO: 3 SOULS (Info del Juego)**
*Inspirado en la sección "NEWS" de tu referencia.*
*   `👺│sneaks-peeks` (Adelantos exclusivos, arte conceptual).
*   `📅│roadmap` (Actualizaciones del estado del proyecto: "Casting al 50%", "Grabación iniciada", etc.).
*   `💘│personajes` (Fichas de las protagonistas, similar a "heroine-profiles").
*   `📸│instagram-feed` (Conecta tu IG aquí con un webhook).

### **CATEGORÍA 3: 🎬 ZONA DE CASTING Y EQUIPO (Visible con Rol "🎬")**
*La parte única de tu proyecto. Aquí captas talento.*
*   `ℹ️│info-vacantes` (Solo lectura. Lista limpia de qué buscas: "Actriz perfil Gótica", "MUA en CDMX").
*   `💬│dudas-casting` (Chat público para preguntas rápidas: "¿Aceptan tatuajes?", "¿Fechas de rodaje?").
*   `🎫│postulate-aqui` **(CRÍTICO)**
    *   *No permitas que suban fotos/CVs al chat público por privacidad.*
    *   *Usa un bot de Tickets (como Ticket Tool).*
    *   *El usuario abre ticket -> Se crea sala privada entre Tú y la Actriz -> Envían material seguro.*

### **CATEGORÍA 4: 💬 COMUNIDAD (Social)**
*Para retener a los jugadores.*
*   `💬│chat-general`
*   `🤣│memes` (Vital para la cultura de internet).
*   `🎨│fan-art`
*   `🔞│nsfw-art` (Opcional, pero al ser juego adulto, es mejor tener un canal cerrado para esto).
*   `🔊│taverna-voz` (Canal de voz).

### **CATEGORÍA 5: 🌍 GLOBAL (Idiomas)**
*   `🇺🇸│english-chat`

### **CATEGORÍA 6: 📮 FEEDBACK (Soporte)**
*   `💡│sugerencias`
*   `🐛│reporte-bugs`

---

## 🤖 3. Bots Recomendados (Esenciales)

1.  **Ticket Tool**: Para la sección de Casting. Permite crear canales privados temporales para recibir CVs y Bookc.
2.  **Carl-bot / MEE6**: Para auto-roles y bienvenida.
3.  **Discal**: Si necesitas gestionar zonas horarias para entrevistas.

---

## 📝 4. Primeros pasos para lanzar

1.  Crea el servidor.
2.  Borra las categorías por defecto.
3.  Crea los roles.
4.  Crea las categorías y canales copiando los emojis de arriba.
5.  Configura el bot de Tickets en el canal `🎫│postulate-aqui`.

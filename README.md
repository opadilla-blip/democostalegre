# Costalegre Home - Maqueta React

Maqueta del sitio web de Costalegre desarrollada con React, Mantine UI y Tailwind CSS v4.

## 🚀 Deploy en Netlify

### Opción 1: Deploy desde GitHub (Recomendado)

1. Sube este proyecto a un repositorio de GitHub
2. Ve a [netlify.com](https://netlify.com) e inicia sesión
3. Click en **"Add new site"** → **"Import an existing project"**
4. Conecta tu cuenta de GitHub y selecciona el repositorio
5. Netlify detectará automáticamente la configuración
6. Click en **"Deploy site"**

### Opción 2: Deploy manual (Drag & Drop)

1. En tu terminal, ejecuta:
   ```bash
   npm install
   npm run build
   ```
2. Ve a [app.netlify.com/drop](https://app.netlify.com/drop)
3. Arrastra la carpeta `dist` generada
4. ¡Listo! Tu sitio estará en línea

## 🛠 Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 📦 Stack tecnológico

- **React 18** - Librería UI
- **Vite 6** - Build tool
- **Mantine 7** - Componentes (Carousel)
- **Tailwind CSS 4** - Estilos
- **Google Fonts** - Cormorant Garamond + Inter

## 📁 Estructura del proyecto

```
costalegre-netlify/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Entrada de la app
│   └── index.css        # Estilos globales + Tailwind
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml         # Configuración de Netlify
└── README.md
```

## 🎨 Paleta de colores

| Color | Hex | Uso |
|-------|-----|-----|
| Azul marino | `#0f3d4a` | Textos, fondos oscuros |
| Turquesa | `#3bb4a4` | Acentos, fondos verdes |
| Dorado | `#d4a855` | CTAs, highlights |
| Beige | `#f5f1ea` | Fondos claros |
| Blanco | `#ffffff` | Fondos principales |

---

Desarrollado para Costalegre, Jalisco, México 🌴

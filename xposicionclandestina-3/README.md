# xposicionclandestina

Sitio web minimalista para mostrar una obra de arte digital única protegida por token y NFC.

## 🚀 Instrucciones para desplegar en Vercel

### 1. Subir a GitHub
- Sube todo el contenido de este proyecto (incluido este README) a un nuevo repositorio de GitHub.

### 2. Crear cuenta en Vercel (si no tienes)
- Ve a [https://vercel.com](https://vercel.com) y crea una cuenta (puedes usar GitHub para login rápido).

### 3. Importar el proyecto en Vercel
- Haz clic en **"New Project"** en Vercel.
- Conecta tu cuenta de GitHub y selecciona este repositorio.

### 4. Configurar proyecto (opcional)
- Si Vercel no detecta que es un proyecto Next.js automáticamente, elige "Framework Preset: Next.js".

### 5. Desplegar
- Haz clic en **"Deploy"** y espera unos segundos.
- Tu sitio estará en línea en una URL como:  
  `https://xposicionclandestina.vercel.app`

## 🔐 Seguridad
- El sistema solo mostrará la imagen si el token en la URL es válido.
- Ideal para enlazar a etiquetas NFC físicas.

## 🧠 Cómo funciona
- Accedes a: `/view/{token}`
- El sitio consulta la tabla `obras` en Supabase.
- Si el token existe, se carga la imagen desde Supabase Storage.

## ⚠️ Tabla esperada en Supabase
Nombre de la tabla: `obras`

Columnas:
- `id` (integer)
- `nombre_obra` (text)
- `nombre_archivo` (text)
- `token` (text, único)
- `url_unica` (text)

## 🖼️ Ejemplo de URL
```
https://xposicionclandestina.vercel.app/view/5a97f3e2c4d94b8f
```

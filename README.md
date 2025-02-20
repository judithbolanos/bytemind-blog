# ByteMind Blog

Este repositorio contiene el código fuente de un blog estático construido con Astro. El blog presenta contenido de prueba, el objetivo de este proyecto es utilizar las colecciones de Astro para la gestión del contenido, paginación estática para una mejor experiencia de usuario y generación automática de un feed RSS.

## ¿Qué es Astro?

<a href="https://astro.build/" target="_blank" rel="noopener noreferrer">Astro</a> es un framework web que permite construir sitios estáticos rápidos con componentes de interfaz de usuario. Su arquitectura única permite renderizar solo el contenido necesario en el cliente, lo que se traduce en sitios web con un rendimiento excepcional.

## Arquitectura del proyecto

El proyecto se estructura de la siguiente manera:

*   **`src/content/blog`:** Contiene los archivos Markdown con el contenido de los artículos del blog. Cada archivo representa un artículo individual y debe incluir metadatos como title, date, description, image, author, etc.
*   **`src/content/author`:** Contiene los archivos YAML con la información de los autores del blog.
*   **`src/components`:** Contiene los componentes reutilizables de Astro que se utilizan en las diferentes páginas del blog.
*   **`src/pages`:** Contiene las páginas del sitio web incluidas las del blog, las cuales son generadas a partir de las colecciones.
*   **`src/icons`:** Contiene los iconos que se utilizan en el sitio web mediante <a href="https://www.astroicon.dev/" target="_blank" rel="noopener noreferrer">Astro icon</a>.
*   **`src/styles`:** Contiene los estilos del sitio web.
*   **`src/utils`:** Contiene la configuración básica como el nombre del sitio, descripción y demás información que se reutiliza en los diferentes componentes.
*   **`astro.config.mjs`:** Archivo de configuración principal de Astro, donde se definen las opciones del proyecto, como la base URL para el despliegue en GitHub Pages.

## Puntos clave que puedes encontrar en este proyecto

###  Generación de contenido estático con colecciones de Astro

Astro permite gestionar el contenido del blog a través de "colecciones". Estas colecciones son conjuntos de archivos Markdown que se organizan en directorios específicos. En este proyecto, se utilizan dos colecciones principales:

*   **`blog`:** Almacena los artículos del blog.
*   **`authors`:** Almacena la información de los autores.

La función `getCollection()` de Astro se utiliza para acceder a los datos de estas colecciones y generar las páginas del blog de forma dinámica durante el proceso de "build".

### Paginación estática

Para mejorar la navegación y el rendimiento del blog, se implementa la paginación estática. Astro genera automáticamente las páginas de paginación durante el "build", lo que permite dividir el contenido en múltiples páginas y evitar la carga de todos los artículos a la vez.

### 3. Generación de Feed RSS

El blog genera automáticamente un feed RSS que permite a los usuarios suscribirse a las actualizaciones y recibir notificaciones de nuevas publicaciones. El feed RSS se genera a partir de los datos de la colección `blog` y se actualiza cada vez que se realiza un nuevo "build".

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                                    |
| :------------------------ | :---------------------------------------------------------|
| `npm install`             | Instalar dependencias                                     |
| `npm run dev`             | Iniciar el servidor de manera local `localhost:4321`      |
| `npm run build`           | Se realiza el build en la carpeta `./dist/`               |
| `npm run preview`         | Se puede visualizar el preview del build                  |

## Enlaces
Puedes ver el blog en el siguiente link:<a href="https://judithbolanos.github.io/bytemind-blog/" target="_blank" rel="noopener noreferrer">https://judithbolanos.github.io/bytemind-blog/</a>.


## Imagenes

<div class="grid-container">
  <div class="grid-item">
    <img src="https://judithbl.com/uploads/home-bytemind.png" alt="Bytemind Home" width="600">
  </div>
  <div class="grid-item">
    <img src="https://judithbl.com/uploads/blogs-bytemind.png" alt="Bytemind Blog" width="600">
  </div>
   <div class="grid-item">
    <img src="https://judithbl.com/uploads/blog-bytemind.png" alt="Bytemind Blog single" width="600">
  </div>
</div>


=== BITÁCORA DE PETICIONES: RUEDA LIBRE ===

1. ANÁLISIS DE LA PETICIÓN INICIAL (index.html)
- URL Completa: http://127.0.0
- Protocolo: HTTP (usualmente HTTP/1.1 o HTTP/2 en Live Server)
- Host: 127.0.0.1 (o localhost)
- Puerto: 5500
- Ruta: /index.html
- Método de la petición: GET
- Código de estado: 200 OK (Significa que la solicitud fue exitosa y el servidor entregó el archivo).

2. PRUEBA DE RUTA INEXISTENTE
- Al escribir: http://127.0.0
- Código de estado: 404 Not Found
- Significado: El servidor funciona correctamente pero el recurso o página solicitada no existe en el sistema de archivos.

3. ROLES DE LAS TECNOLOGÍAS WEB en Rueda Libre
- HTML (Estructura): Define el esqueleto del sitio. Ejemplo: El título <h1>Rueda Libre</h1> y los párrafos de las tarifas de alquiler.
- CSS (Presentación): Define el diseño visual. Ejemplo: Pintar el fondo de la página de color verde o centrar el catálogo de bicicletas.
- JavaScript (Interactividad): Define el comportamiento dinámico. Ejemplo: Un botón interactivo que calcula el costo total dependiendo de las horas de alquiler seleccionadas por el cliente.

4. COMO UTILIZAR GRID CON BOOTSTRAP
- Mediante el uso de la clase container aunado a la división por row = filas y col = columnas se puede dar mayor estructura a una página sin perder la estitca

5. BOOTSTRAP 
- Se puede definir como un "Catalogo" de opciones precreadas para darle forma  auna estructura.

6. TAILWIND
- A diferencia de BOOTSTRAP se puede decir que es un picel con el que puedes recrear con mayor facilidad tu idea, sin embargo hay que hacerla desde sus bases y no tiene una estructura predeterminada como Bootrstrap.

7. JAVASCRIPT
- Son ejecuciones que por medio de lógica se realizan tomando distintos tipos de elemntos como accionadores, ya sean id, clases, tags o cualquier otra cosa que se pueda tomar como referencia, yendo desde el incio de la página hasta un click
8. ORGANIZACION
- La manera más común de organizacion de carpetas al trabajar es el siguiente
mi-proyecto-web/
│
├── index.html              <-- Página principal (y otros .html si los hay)
│
├── css/                    <-- Hojas de estilo
│   └── styles.css          (o main.css / style.css)
│
├── js/                     <-- Scripts de JavaScript
│   └── main.js             (o script.js / index.js)
│
└── assets/                 <-- Recursos multimedia y archivos estáticos
    ├── images/             <-- Imágenes (.png, .jpg, .svg, .webp)
    ├── icons/              <-- Iconos o logos
    └── fonts/              <-- Tipografías personalizadas (opcional)
    Se intentará priosirzar en próximos proyectos
    9. 
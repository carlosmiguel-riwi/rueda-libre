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
├── index.html              <-- Siempre en la raíz
│
├── pages/                  <-- Páginas secundarias (también llamada 'views/')
│   ├── nosotros.html
│   ├── servicios.html
│   └── contacto.html
│
├── css/
│   ├── global.css          <-- Estilos compartidos (menú, pie de página, fuentes)
│   └── contacto.css        <-- Estilos exclusivos de una página (opcional)
│
├── js/
│   ├── main.js             <-- Lógica global
│   └── formulario.js       <-- Lógica específica (opcional)
│
└── assets/
    └── images/
    Se intentará priosirzar en próximos proyectos

9. FUNCIONON DE MENU DESPLEGABLE PARA TELEFONOS
Para este script estetico se utilizó inteligencia artificial (Gemini) ya que no poseía los conocimientos suficientes en Script, sin embargo se encudriño en la funcion de cada "function" y variable dentro del código. Resumiendo de la siguiente manera 

Variables
menuToggle: Selecciona el botón que activa o desactiva la apertura y cierre del menú móvil.

mobileMenu: Obtiene el contenedor principal del menú móvil mediante su ID (site-mobile-menu).

mobileMenuClose: Selecciona el botón interno destinado a cerrar manualmente el menú.

mobileMenuBackdrop: Selecciona el fondo semitransparente oscuro que aparece detrás del menú para oscurecer el resto de la página al abrirlo.

desktopViewport: Crea una regla de medios para detectar si la pantalla es de tamaño de escritorio (ancho mínimo de 768 píxeles).

Funciones
closeMenu(restoreFocus): Oculta el menú móvil, actualiza sus estados de accesibilidad (aria-hidden, inert), remueve las clases visuales de apertura y, opcionalmente, devuelve el foco del teclado al botón principal si no se está en una pantalla de escritorio.

openMenu(): Muestra el menú móvil, activa su accesibilidad, añade las clases de apertura correspondientes en el DOM y traslada el foco automáticamente hacia el botón de cierre dentro del menú.

trapFocus(event): Controla la navegación por teclado dentro del menú abierto. Si el usuario presiona la tecla Escape, cierra el menú; si presiona Tab, atrapa el foco del usuario dentro de los elementos interactivos del menú para que no se escape hacia el fondo de la página.
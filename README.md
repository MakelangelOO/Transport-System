# Transport-System
El repositorio contiene una API rest para el sistema de transporte de una empresa, cuenta con cruds básicos para 7 modelos, trabajados con un ORM y dos métodos específicos el primero  ***obtener vehículos disponibles*** dentro de servicios(vehiculo.servicio.ts) el cual permite obtener los vehículos disponibles para realizar cargamentos (Consulta Compuesta). El segundo ***consultar cargas, vehículos asociados*** dentro de servicios(conductor.servicio.ts) el cual permite consultar cuáles son los cargamentos asociados al conductor, a su vez permite saber en qué vehículo está asignado al cargamento (Consulta Compuesta). El desarrollo se realizó teniendo en cuenta una arquitectura hexagonal contemplada dentro de la ruta src donde se separó la lógica interna de la API contemplando los puertos de acceso en este caso a una base de datos PostgreSQL los accesos a las tablas de la base de datos denominados en este caso repositorios, los  servicios a utilizar o la lógica de negocio propia de la API y las rutas y controladores de red contenidos dentro de HTTP. También se intentan seguir principios SOLID para que en compañía de la arquitectura permita obtener un desarrollo fácil de entender, escalable, y congruente, el cual sea configurable  y editable a futuro.

# TECNOLOGIAS:


### ENTORNO:
  
##### Node.js: 
Es un entorno de ejecución creado para ejecutar JavaScript del lado del servidor, actualmente con ayuda de diferentes librerías Node.js es un entorno amplio con capacidad para realizar diferentes tareas apoyándose en el lenguaje JavaScript. En este caso se utilizó para la creación del API rest del sistema. Se seleccionó teniendo en cuenta la alta velocidad de respuesta que ofrece, su inclusión en la mayoría de servidores y el tamaño de su comunidad y la escalabilidad que permite, lo que favorece al desarrollo.
  
### LENGUAJE
##### TypeScript:
Es el lenguaje seleccionado para el desarrollo de la API, visto como un superset de JavaScript, ya que tiene las mismas virtudes, pero añade tipado estático y opcional, funciones avanzadas e inclusión de POO lo que permite generar código más estable, entendible y que proporciona mayor confianza.

### FRAMEWORK:
  
##### ExpressJS: 
Es un framework back-end basado en JavaScript, es minimalista y rápido. Proporciona herramientas y características que permiten el desarrollo de aplicaciones Back-end fácilmente escalables, acompañado de librerías y paquetes que facilitan el proceso de creación, diseño y desarrollo, es el framework seleccionado para la API.


### LIBRERIAS:

##### TypeORM:
Es una librería utilizada en el desarrollo de las API rest, para facilitar la comunicación con las bases de datos, ya que permite generar la estructura y la forma de manipulación de los datos sin necesidad de conocer sobre SQL directamente. En este caso seleccionada porque facilita y agiliza el proceso de manipulación de la data, y su entendimiento con TypeScript.

##### 

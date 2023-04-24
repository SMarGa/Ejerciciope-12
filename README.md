## Indice

1. [Introducción](#1-introducción)

2. [Funko-APP](#2-funko-app)

   1. [Ejercicio 1](#21-ejercicio-PE)
   1. [Ejercicio 2](#22-ejercicio-2)
   1. [Ejercicio 3](#23-ejercicio-3)

3. [Conclusión](#3-conclusión)

4. [Bibliografía](#4-bibliografía)

## 1. Introducción

A lo largo de este documento se recogerán los aspectos técnicos de la implementacion propuesta para el problema planteado en el enunciado de la práctica así como dificultades encontradas en su desarrollo.

Durante la elaboración del sistema, se han utilizado las siguientes herramientas:

- **ESLint** para la comprobación de errores
- **Prettier** para el formateo del código
- **TypeDoc** para la generación automática de documentación del código
- **Mocha** y **Chai** para el desarrollo dirigido por pruebas
- **Instanbul** para la comprobación del cubrimiento del código fuente
- **GitHub Actions** para la integración continua del código ejecutado en **Node.js**, el envío de información de cubrimiento a **Coveralls** y la comprobación de calidad y seguridad del código fuente con **Sonar Cloud**

## 2. Ejercicios propuestos

### 2.1 Ejercicio PE

En el ejerciio PE se nos propuso realizar peticiones de comandos a ser ejecutados en el servidor y devolver el resultado segun si se pudo ejecutar, si devuelve un error o si se ejecuta el resultado de la ejecución.

Para llevar a cabo esto, se han realizado dos soluciones diferentes, una utilizando exec y otra utilizando spawn.

Con exec es mucha más sencillo debido a que en la propia ejecución del comando se puede controlar si ocurrio un error.

Por otro lado spawn requiere de manejadores para su salida estandar, la salida estandar de error y si ocurre un error en la propia ejecución. De manera que en este caso no se enviará hasta que no se termine de recibir la respuesta.

### 2.2 Ejercicio de Servidor

Me limitaré a explicar el funcionamiento del servidor puesto que las otras clases ya se han explicado en informes anteriores.

Dentro del manejador de /funko , se realizan algunas comprobaciones para asegurarse de que los datos necesarios se proporcionen en la solicitud. Si se encuentra algún error, se devuelve un objeto con un código de error y un mensaje explicando qué es lo que salió mal.

Si el comando de la solicitud es "post", se comprueba que se hayan proporcionado todos los campos necesarios y se crea un nuevo objeto Funko con los valores proporcionados. Luego, se intenta agregar este objeto Funko a una base de datos utilizando la función "addFunko" de la clase "FunkoUserDataBase". Si se agrega correctamente, se devuelve un objeto con un código de éxito y un mensaje de confirmación. De lo contrario, se devuelve un objeto con un código de error y un mensaje explicando qué salió mal.

Para añadir un funko se utiliza una petición como la siguiente (recomiendo el uso de Thunder Client para la comprobación):

```
http://localhost:3000/funko?command=post&id=15&name=Megafunko&description=Funko de prueba&type=Regular&genre=Peliculas&franchise=Marvel&serial=1&exclusive=true&especial=none&price=15&user_name=Saul
```

Si el comando de la solicitud es "delete", se comprueba que se hayan proporcionado un nombre de usuario y un ID de Funko. Luego, se intenta eliminar el Funko con ese ID de la base de datos utilizando la función "removeFunko" de la clase "FunkoUserDataBase". Si se elimina correctamente, se devuelve un objeto con un código de éxito y un mensaje de confirmación. De lo contrario, se devuelve un objeto con un código de error y un mensaje explicando qué salió mal.

De forma similar una petición de delete sería:

```
http://localhost:3000/funko?command=delete&id=15&user_name=Saul
```

## 3. Conclusión

A lo largo de la realización de la práctica me he familiarizado con el uso de express para la creación de un servidor y como gestionar las peticiones a travéz de manejadores.

## 4. Bibliografía

- [Enunciado de la práctica](https://ull-esit-inf-dsi-2223.github.io/prct10-fs-proc-sockets-funko-app/)

- [Expresiones regulares](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)

- [Métodos de strings](https://www.w3schools.com/js/js_string_methods.asp)

- [Información de arrays](https://www.tutorialspoint.com/typescript/typescript_arrays.htm)

- [Clases en typescript](https://www.tutorialesprogramacionya.com/angularya/detalleconcepto.php?punto=23&codigo=23&inicio=20)

---

Autor: Saúl Martín García

Correo: alu0101405810@ull.edu.es

```

```

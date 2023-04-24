import * as fs from "fs";
import { Funko } from "./Funkos/Funko.js";
import { Funk_Genres } from "./Enums/Funk_Genres.js";
import { Funk_Types } from "./Enums/Funk_Types.js";
import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { MongoClient } from "mongodb";
import { funkoStructure } from "./Estructures/funko_structure.js";

const dbURL = "mongodb://127.0.0.1:27017";
const dbName = "funko-app";

const app = express();

const __dirname = join(dirname(fileURLToPath(import.meta.url)), "../public");
console.log(`Served hosted ${__dirname}`);
app.use(express.static(__dirname));

app.get("/funko", (req, res) => {
  if (!req.query.command) {
    return res.send({
      code: 1,
      error: "Es necesario especificar un commando",
    });
  }
  if (req.query.command === "post") {
    if (!req.query.user_name) {
      return res.send({
        code: 1,
        error: "Se necesita un usuario",
      });
    }
    if (!req.query.id) {
      return res.send({
        code: 1,
        error: "Se necesita un id",
      });
    }
    if (!req.query.name) {
      return res.send({
        code: 1,
        error: "Se necesita un nombre",
      });
    }

    if (!req.query.description) {
      return res.send({
        code: 1,
        error: "Se necesita una descripción",
      });
    }
    if (!req.query.type) {
      return res.send({
        code: 1,
        error: "Se necesita un tipo",
      });
    }
    if (!req.query.genre) {
      return res.send({
        code: 1,
        error: "Se necesita un genero",
      });
    }
    if (!req.query.franchise) {
      return res.send({
        code: 1,
        error: "Se necesita una franquicia",
      });
    }
    if (!req.query.serial) {
      return res.send({
        code: 1,
        error: "Se necesita un numero serial",
      });
    }
    if (!req.query.exclusive) {
      return res.send({
        code: 1,
        error: "Se necesita determinar si es exclusivo",
      });
    }
    if (!req.query.especial) {
      return res.send({
        code: 1,
        error: "Se necesita determinar cualidades especiales",
      });
    }
    if (!req.query.price) {
      return res.send({
        code: 1,
        error: "Se necesita un precio",
      });
    }
    console.log("Post request");
    let funk_type: Funk_Types = Funk_Types.Pop;
    if (Object.values(Funk_Types).includes(req.query.type as Funk_Types)) {
      funk_type = req.query.type as Funk_Types;
    }
    let funk_genre: Funk_Genres = Funk_Genres.Animacion;

    if (Object.values(Funk_Genres).includes(req.query.genre as Funk_Genres)) {
      funk_genre = req.query.genre as Funk_Genres;
    }
    const my_new_func = new Funko(
      Number(req.query.id),
      req.query.name as string,
      req.query.description as string,
      funk_type,
      funk_genre,
      req.query.franchise as string,
      Number(req.query.serial),
      Boolean(req.query.exclusive),
      req.query.especial as string,
      Number(req.query.price)
    );

    MongoClient.connect(dbURL)
      .then((client) => {
        const db = client.db(dbName);

        return db.collection<Funko>(req.query.user_name as string).findOne({
          _myid: Number(req.query.id),
        });
      })
      .then((result) => {
        if (result === null) {
          MongoClient.connect(dbURL)
            .then((client) => {
              const db = client.db(dbName);

              return db
                .collection<Funko>(req.query.user_name as string)
                .insertOne(my_new_func);
            })
            .then((result_2) => {
              console.log(result_2);
              return res.send({
                code: 0,
                message: "Funko agregado correctamente",
              });
            })
            .catch((error_2) => {
              console.log(error_2);
              return res.send({
                code: 1,
                error_out: error_2,
                message: "DEFAULT ERROR",
              });
            });
        } else {
          return res.send({
            code: 1,
            message: "ID de funko ya utilizado",
          });
        }
      })
      .catch((error) => {
        return res.send({
          code: 1,
          error_out: error,
          message: "DEFAULT ERROR",
        });
      });
  }

  if (req.query.command === "delete") {
    console.log("Delete request");
    if (!req.query.user_name) {
      return res.send({
        code: 1,
        error: "Se necesita un usuario",
      });
    }
    if (!req.query.id) {
      return res.send({
        code: 1,
        error: "Se necesita un id",
      });
    }
    MongoClient.connect(dbURL)
      .then((client) => {
        const db = client.db(dbName);

        return db.collection<Funko>(req.query.user_name as string).findOne({
          _myid: Number(req.query.id),
        });
      })
      .then((result) => {
        if (result === null) {
          return res.send({
            code: 1,
            message: "ID de funko no encontrada",
          });
        } else {
          MongoClient.connect(dbURL)
            .then((client) => {
              const db = client.db(dbName);

              return db
                .collection<Funko>(req.query.user_name as string)
                .deleteOne({
                  _myid: Number(req.query.id),
                });
            })
            .then((result_2) => {
              console.log(result_2);
              return res.send({
                code: 0,
                message: "Funko eliminado correctamente",
              });
            })
            .catch((error_2) => {
              return res.send({
                code: 1,
                error_out: error_2,
                message: "DEFAULT ERROR",
              });
            });
        }
      })
      .catch((error) => {
        return res.send({
          code: 1,
          error_out: error,
          message: "DEFAULT ERROR",
        });
      });
  }
});

app.get("*", (req, res) => {
  res.send("<h1>404</h1>");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});

import { Funk_Genres } from "../Enums/Funk_Genres.js";
import { Funk_Types } from "../Enums/Funk_Types.js";
/**
 *
 * Esta clase se usara para almacenar la información de un Funco.
 *
 */
export class Funko {
  private _price: number;
  /**
   *
   * @param _myid myID del Funko
   * @param _name Nombre del Funko
   * @param _description Descripcion del Funko
   * @param _type Tipo del Funko definmyidos por el enum Funk_Types
   * @param _genre Genero del Funko definmyidos por el enum Funk_Genres
   * @param _franchise Franquicia del Funko
   * @param _serial_number Numero de serie del Funko
   * @param _exlusive Boleano que define si es o no exclusivo el Funko
   * @param _especial_props Cualmyidades especiales  del Funko
   * @param price Precio del Funko (No puede ser negativo)
   */
  constructor(
    private _myid: number,
    private _name: string,
    private _description: string,
    private _type: Funk_Types,
    private _genre: Funk_Genres,
    private _franchise: string,
    private _serial_number: number,
    private _exlusive: boolean,
    private _especial_props: string,
    price: number
  ) {
    if (price < 0) {
      throw new Error("Precio no puede ser negativo");
    } else {
      this._price = price;
    }
  }

  get myid() {
    return this._myid;
  }
  set myid(new_myid: number) {
    this._myid = new_myid;
  }
  get name() {
    return this._name;
  }
  set name(new_name: string) {
    this._name = new_name;
  }
  get description() {
    return this._description;
  }
  set description(new_description: string) {
    this._description = new_description;
  }

  get type() {
    return this._type;
  }
  set type(new_type: Funk_Types) {
    this._type = new_type;
  }

  get genre() {
    return this._genre;
  }
  set genre(new_genre: Funk_Genres) {
    this._genre = new_genre;
  }

  get franchise() {
    return this._franchise;
  }
  set franchise(new_franchise: string) {
    this._franchise = new_franchise;
  }

  get serial_number() {
    return this._serial_number;
  }
  set serial_number(new_serial_number: number) {
    this._serial_number = new_serial_number;
  }

  get exlusive() {
    return this._exlusive;
  }
  set exlusive(new_exlusive: boolean) {
    this._exlusive = new_exlusive;
  }
  get especial_props() {
    return this._especial_props;
  }
  set especial_props(new_especial_props: string) {
    this._especial_props = new_especial_props;
  }
  get price() {
    return this._price;
  }
  set price(new_price: number) {
    if (new_price < 0) {
      throw new Error("Precio no puede ser negativo");
    } else {
      this._price = new_price;
    }
  }
  /**
   *
   * Funcion para recabar todos los datos de un Funko en una string
   *
   * @returns string con todos los datos del Funko
   */
  public toString(): string {
    let output = "";
    output += `myID: ${this.myid}\n`;
    output += `Nombre: ${this.name}\n`;
    output += `Descripcion: ${this.description}\n`;
    output += `Tipo: ${this.type}\n`;
    output += `Genero: ${this.genre}\n`;
    output += `Franquicia: ${this.franchise}\n`;
    output += `Numero de serie: ${this.serial_number}\n`;
    if (this.exlusive) {
      output += `Es esclusivo\n`;
    } else {
      output += `No es esclusivo\n`;
    }
    output += `Precio: ${this.price}\n`;
    return output;
  }
}

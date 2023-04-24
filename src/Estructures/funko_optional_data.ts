import { Funk_Genres } from "../Enums/Funk_Genres.js";
import { Funk_Types } from "../Enums/Funk_Types.js";

export type funkoOptionalStructure = {
  _id: number;
  _name?: string;
  _description?: string;
  _type?: Funk_Types;
  _genre?: Funk_Genres;
  _franchise?: string;
  _serial_number?: number;
  _exlusive?: boolean;
  _especial_props?: string;
  _price?: number;
};

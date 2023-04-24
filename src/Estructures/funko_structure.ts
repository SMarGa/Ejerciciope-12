import { Funk_Genres } from "../Enums/Funk_Genres.js";
import { Funk_Types } from "../Enums/Funk_Types.js";

export type funkoStructure = {
  id: number;
  name: string;
  description: string;
  type: Funk_Types;
  genre: Funk_Genres;
  franchise: string;
  serial_number: number;
  exlusive: boolean;
  especial_props: string;
  price: number;
};

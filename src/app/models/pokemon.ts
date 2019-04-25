import {Attack} from './attack';
import {Stat} from './stat';

export class Pokemon {
  id: string;
  name: string;
  nationalPokedexNumber: number;
  imageUrl: string;
  imageUrlHiRes: string;
  types: string[];
  supertype: string;
  subtype: string;
  hp: string;
  retreatCost: string[];
  convertedRetreatCost: number;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  attacks: Attack[];
  resistances: Stat[];
  weaknesses: Stat[];

}

import { Team } from './team.model';

export interface ApiRespone {
    standings: Standing[];
    [unusedProperties: string]: any 

}

export interface Standing {
    stage: string;
    type: string;
    group: string;
    table: Team[];
}
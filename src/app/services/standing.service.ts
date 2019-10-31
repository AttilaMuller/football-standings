import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { Team } from "../models/team.model";
import { HttpClient } from "@angular/common/http";
import { ApiRespone } from '../models/api.model';

@Injectable({
  providedIn: "root"
})
export class StandingService {
  private _teams: Subject<Array<Team>> = new BehaviorSubject<Array<Team>>([]);
  private readonly API = "https://api.football-data.org/v2/competitions/";
  private readonly leagues = {
    bundesliga: "BL1",
    premierLeague: "PL",
    serieA: "SA",
    primeraDivision: "PD"
  };

  public readonly teams: Observable<Array<Team>> = this._teams.asObservable();

  constructor(private http: HttpClient) { }

  fetchStandings(league: string) {
    this.http.get(`${this.API}${this.leagues[league]}/standings`).subscribe((response: ApiRespone) => {
      this._teams.next(response.standings[0].table);
    });
  }
}

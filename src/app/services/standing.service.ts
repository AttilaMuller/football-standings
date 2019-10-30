import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { Team } from "../models/team.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class StandingService {
  private _teams: Subject<Array<Team>> = new BehaviorSubject<Array<Team>>([]);
  private readonly API = "http://api.football-data.org/v2/competitions/";
  private readonly leagues = {
    bundesliga: "BL1",
    premiereLeague: "PL",
    serieA: "SA",
    primeraDivision: "PD"
  };

  public readonly teams: Observable<Array<Team>> = this._teams.asObservable();

  constructor(private http: HttpClient) { }

  fetchStandings(league: string) {
    this.http.get(`${this.API}${this.leagues[league]}/standings`).subscribe((response: any) => {
      this._teams.next(response.standings[0].table);
    });
  }
}

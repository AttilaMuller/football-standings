import { Component, OnInit } from "@angular/core";
import { StandingService } from "src/app/services/standing.service";
import { Team } from "src/app/models/team.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-standings",
  templateUrl: "./standings.component.html",
  styleUrls: ["./standings.component.css"]
})
export class StandingsComponent implements OnInit {

  columnsToDisplay = [
    "position",
    "name",
    "points",
    "playedGames",
    "won",
    "draw",
    "lost",
    "goalsFor",
    "goalsAgainst",
    "goalDifference"
  ];

  teams$: Observable<Team[]>;

  constructor(private standingService: StandingService) {
  }

  ngOnInit() {
    this.standingService.fetchStandings("premiereLeague");
    this.teams$ = this.standingService.teams;
  }

  getStandings(league: string) {
    this.standingService.fetchStandings(league);
  }

}

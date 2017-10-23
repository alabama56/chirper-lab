import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";

import { Chirps, IChirp } from "../data/data";
import { ChirpService } from '../chirp.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  chirp: IChirp;

  constructor(
    private chirpService: ChirpService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.chirpService.getChirp(+params.get('id')))
      .subscribe(chirp => this.chirp = chirp);
  }

  goBack(): void {
    this.location.back();
}

}

import { Component, OnInit } from '@angular/core';

import { Chirps, IChirp } from "./data/data";
import { ChirpService } from './chirp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Chirper';
  chirps: IChirp[];
  selectedChirp: IChirp;

  constructor(
    private chirpService: ChirpService,
    ) { }


 

  ngOnInit(): void {
    // this.chirpService.initializeChirps();
  }
}

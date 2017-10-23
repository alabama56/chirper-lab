import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Chirps, IChirp } from "../data/data";
import { ChirpService } from '../chirp.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  chirps: IChirp[];
  selectedChirp: IChirp;

  constructor(
    private chirpService: ChirpService,
    private router: Router) { }


  getChirps(): void {
    this.chirpService.getChirps().then(chirps => this.chirps = chirps);
  }

  ngOnInit(): void {
    this.getChirps();
  }

}

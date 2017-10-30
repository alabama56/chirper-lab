import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Chirps, IChirp } from "../data/data";
import { ChirpService } from '../chirp.service';
import { ChirpFormComponent } from "../chirp-form/chirp-form.component"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  chirps: Array<any>;
  selectedChirp: IChirp;

  constructor(
    private svc: ChirpService,
    private router: Router) { }


  
  ngOnInit(): void {
    this.svc.getChirps()
      .subscribe((response) => {
        this.chirps = response;
      })
  }


}

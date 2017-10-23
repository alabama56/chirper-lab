import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';


import { Chirps, IChirp } from "../data/data";
import { ChirpService } from '../chirp.service';
import { Router } from '@angular/router'

let bottomClick = document.getElementById("b");

@Component({
  selector: 'app-chirp-form',
  templateUrl: './chirp-form.component.html',
  styleUrls: ['./chirp-form.component.css']
})



export class ChirpFormComponent implements OnInit {
 
  

  constructor(
    private router: Router,
    private svc: ChirpService
  ) { }

  ngOnInit() {
  }

  @Output()
  myNewChirp: EventEmitter<IChirp> = new EventEmitter<IChirp>();

  sendChirp(user: string, username: string, id: number, message: string){
    let newChirp = {img: "assets/img-thing.jpeg", user, username, id: Number(id), message };

    if (user === "" || username === "" || id === undefined || message === "" ){
      alert("You must fill in all input boxes to send a Chrip");
      this.router.navigate(['/form'])
    }else {
      this.svc.chirps.push(newChirp);
      this.router.navigate(['/list'])
    }
  }

}

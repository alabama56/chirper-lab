import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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
  form: FormGroup;
  

  constructor(
    private router: Router,
    private svc: ChirpService,
    private fb: FormBuilder
  ) { this.form = this.fb.group({
    user: ['', Validators.required],
    username: ['', Validators.required],
    message: ['', Validators.required],
    })
  }

  ngOnInit() {
  }
  
  

  @Output()
  myNewChirp: EventEmitter<IChirp> = new EventEmitter<IChirp>();

  sendChirp(){
    if (this.form.status !== 'VALID'){
      alert("You must fill in all input boxes to send a Chrip");
      this.router.navigate(['/form'])
    }else {
      
      this.svc.configureAndSetChirp(this.form.value);
      this.router.navigate(['/list'])
    }
  }

}

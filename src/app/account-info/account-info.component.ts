import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ChirpService, IChirp } from '../chirp.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  form: FormGroup;

  constructor(  
    private router: Router,
    private svc: ChirpService,
    private fb: FormBuilder) {
       this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      avatar: ['', Validators.required]
      })
    }

  ngOnInit() {
  }

}

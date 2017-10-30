import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class ChirpService {

    static api: string ="http://localhost:3000/api/chirps"

    constructor(private http: Http) {
        
    }

    // initializeChirps (): void {
    //     this.chirps = ;
    // }
    deleteChirp(id: string){
        return this.http.delete(`${ChirpService.api}/${id}`)
            .map(r => r.text());

    }

    createChirp(chirp: IChirp) {
        return this.http.post(ChirpService.api, chirp)
            .map(r => r.text());
    }

    getChirps(): Observable<any> {
        return this.http
            .get(ChirpService.api)
            .map(r => r.json())
            .map(chirps => {
                return chirps.reverse()
            });
    }

    getChirp(id: string): Observable<any>{
        return this.http
            .get(`${ChirpService.api}/${id}`)
            .map(r => r.json());
    }
}

export interface IChirp {
    user: string;
    id: string;
    message: string;
}
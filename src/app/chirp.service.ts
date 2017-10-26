import { Injectable } from "@angular/core";
import { Chirps, IChirp } from "./data/data";

@Injectable()
export class ChirpService {
    chirps: Array<IChirp> = [];

    constructor() {
        
    }

    initializeChirps (): void {
        this.chirps = Chirps;
    }

    configureAndSetChirp(chirp): void {
        let num = Math.floor(Math.random() * 10000 );
        chirp.id = num;
        chirp.img = "assets/img-thing.jpeg";

        this.chirps.unshift(chirp);
    }

    getChirps(): Promise<IChirp[]> {
        return new Promise<Array<IChirp>>((resolve, reject) => {
            if (this.chirps.length === 0 ){
                this.initializeChirps();
                resolve(Chirps);
                return;
            } 
            resolve(this.chirps);
        });
    }

    getChirp(id: number): Promise<IChirp> {
        return this.getChirps()
        .then((chirps) => {
            return chirps.find(chirp => chirp.id === id);
        })
        .then((chirp) => {
            return chirp;
        });
    }
}
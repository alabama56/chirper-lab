import { Injectable } from "@angular/core";
import { Chirps, IChirp } from "./data/data";

@Injectable()
export class ChirpService {
    getChirps(): Promise<IChirp[]> {
        return Promise.resolve(Chirps);
           
    }

    getChirp(id: number): Promise<IChirp> {
        return this.getChirps()
                   .then(chirps => chirps.find(chirp => chirp.id === id));
    }
}
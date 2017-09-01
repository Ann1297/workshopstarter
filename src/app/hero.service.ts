import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { Heroes } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(Heroes);
            }, 500);
        });
    }

    getHero(id: number): Promise<Hero> {
        return new Promise(resolve => {
            setTimeout(() => {
                const hero = Heroes.find(h => h.id === id);
                resolve(hero);
            }, 500);
        });
    }
}

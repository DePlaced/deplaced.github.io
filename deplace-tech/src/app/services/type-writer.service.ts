import { Injectable } from '@angular/core';
import { concat, concatMap, delay, from, interval, map, merge, of, scan, take } from 'rxjs';

interface TypeParams {
  word: string;
  speed: number;
  backwards?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TypeWriterService {

  getTypewriterEffect(titles: string[]) {
    return from(titles).pipe(
      concatMap(title => this.typeEffect(title)),
    );
  }

  typeEffect(word: string) {
    return concat(
      this.type({ word, speed: 50 }),
      of('').pipe(delay(1200)),
    );
  }

  private type({ word, speed, backwards = false }: TypeParams) {
    const typing$ = interval(speed).pipe(
      map(x => backwards ? word.substring(0, word.length - x) : word.substring(0, x + 1)),
      take(word.length)
    );

    const flicker$ = interval(speed * 2).pipe(
      map(x => x % 2 === 0 ? '' : '|')
    );

    return merge(
      typing$.pipe(map(typed => ({ typed }))),
      flicker$.pipe(map(flicker => ({ flicker })))
    ).pipe(
      scan((acc, curr) => ({ ...acc, ...curr }), { typed: '', flicker: '' }),
      map(({ typed, flicker }) => typed + flicker)
    );
  }
}

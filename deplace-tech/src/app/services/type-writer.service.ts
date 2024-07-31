import { Injectable } from '@angular/core';
import { combineLatest, concat, concatMap, delay, from, interval, map, merge, of, scan, startWith, take, takeWhile } from 'rxjs';

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
      take(word.length),
      startWith(''),
    );

    const flicker$ = interval(speed * 2).pipe(
      map(x => x % 2 === 0 ? '' : '|'),
      startWith('')
    );

    return combineLatest([typing$, flicker$]).pipe(
      takeWhile(([typed, _]) => typed.length <= word.length),
      scan(([prevTyped, prevFlicker], [typed, flicker]) => {
        const isTypingComplete = typed.length === word.length;
        return [typed, isTypingComplete ? '' : flicker];
      }, ['', '']),
      map(([typed, flicker]) => typed + flicker)
    );
  }
}

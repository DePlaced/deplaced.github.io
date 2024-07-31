import { Component, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TypeWriterService } from '../../services/type-writer.service';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    LottieComponent,
  ]
})
export class HomePageComponent {
  private typewriterService = inject(TypeWriterService);
 
  titles: string[] = [" Welcome to my home page..."];
 
  typedText$ = this.typewriterService
  .getTypewriterEffect(this.titles)
  .pipe(map((text) => text));

  options: AnimationOptions = {
    path: '/assets/animations/infrastructure.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}

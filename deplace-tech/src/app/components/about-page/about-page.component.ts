import { Component, inject } from '@angular/core';
import { TypeWriterService } from '../../services/type-writer.service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {
  private typewriterService = inject(TypeWriterService);
  titles: string[] = [" Welcome to my about page... Work in progress"];
  typedText$ = this.typewriterService
  .getTypewriterEffect(this.titles)
  .pipe(map((text: any) => text));
}

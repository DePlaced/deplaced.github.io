import { Component, inject } from '@angular/core';
import { TypeWriterService } from '../../services/type-writer.service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  private typewriterService = inject(TypeWriterService);
  titles: string[] = [" Welcome to my contact page... Work in progress"];
  typedText$ = this.typewriterService
  .getTypewriterEffect(this.titles)
  .pipe(map((text) => text));

}

import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TypeWriterService } from '../../services/type-writer.service';

interface Project {
  title: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ProjectPageComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private typewriterService = inject(TypeWriterService);

  /** Mock projects data */
  private mockProjects: Project[] = [
    { title: 'Project 1', cols: 2, rows: 1 },
    { title: 'Project 2', cols: 1, rows: 1 },
    { title: 'Project 3', cols: 1, rows: 2 },
    { title: 'Project 4', cols: 1, rows: 1 }
  ];

  /** Fetch projects from mock data */
  fetchProjects(): Observable<Project[]> {
    return of(this.mockProjects);
  }

  /** Adjust projects layout based on screen size */
  projects$: Observable<Project[]> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => matches),
    switchMap((isHandset) => this.fetchProjects().pipe(
      map((projects) => {
        if (isHandset) {
          return projects.map(project => ({ ...project, cols: 1, rows: 1 }));
        }
        return projects;
      })
    ))
  );

  titles: string[] = ["Welcome to my project page..."];
  typedText$ = this.typewriterService
    .getTypewriterEffect(this.titles)
    .pipe(map((text) => text));
}

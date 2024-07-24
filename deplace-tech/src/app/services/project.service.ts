import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  fetchProjects(): Observable<Project[]> {
    const projects: Project[] = [
      { id: 1, name: 'Project 1', cols: 1, rows: 1 },
      { id: 2, name: 'Project 2', cols: 1, rows: 1 },
      { id: 3, name: 'Project 3', cols: 1, rows: 1 },
      { id: 4, name: 'Project 4', cols: 1, rows: 1 },
      { id: 5, name: 'Project 5', cols: 1, rows: 1 },
      { id: 6, name: 'Project 6', cols: 1, rows: 1 },
      { id: 7, name: 'Project 7', cols: 1, rows: 1 },
      { id: 8, name: 'Project 8', cols: 2, rows: 1 },
      { id: 9, name: 'Project 9', cols: 2, rows: 1 },
      { id: 10, name: 'Project 10', cols: 2, rows: 1 },
      { id: 11, name: 'Project 11', cols: 2, rows: 1 },
      { id: 12, name: 'Project 12', cols: 2, rows: 1 },
      { id: 13, name: 'Project 13', cols: 3, rows: 1 },
      { id: 14, name: 'Project 14', cols: 3, rows: 1 },
      { id: 15, name: 'Project 15', cols: 3, rows: 1 },
      { id: 16, name: 'Project 16', cols: 3, rows: 1 },
      { id: 17, name: 'Project 17', cols: 3, rows: 1 },
      { id: 18, name: 'Project 18', cols: 3, rows: 1 },
      { id: 19, name: 'Project 19', cols: 1, rows: 1 },
      { id: 20, name: 'Project 20', cols: 1, rows: 1 }
    ];
    return of(projects);
  }
}

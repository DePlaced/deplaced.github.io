import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  fetchProjects(): Observable<Project[]> {
    const projects: Project[] = [
      { id: 1, name: 'Project 1' },
      { id: 2, name: 'Project 2' },
      { id: 3, name: 'Project 3' },
      { id: 4, name: 'Project 4' },
      { id: 5, name: 'Project 5' },
      { id: 6, name: 'Project 6' },
      { id: 7, name: 'Project 7' },
      { id: 8, name: 'Project 8' },
      { id: 9, name: 'Project 9' },
      { id: 10, name: 'Project 10' },
      { id: 11, name: 'Project 11' },
      { id: 12, name: 'Project 12' },
      { id: 13, name: 'Project 13' },
      { id: 14, name: 'Project 14' },
      { id: 15, name: 'Project 15' },
      { id: 16, name: 'Project 16' },
      { id: 17, name: 'Project 17' },
      { id: 18, name: 'Project 18' },
      { id: 19, name: 'Project 19' },
      { id: 20, name: 'Project 20' }
    ];
    return of(projects);
  }
}

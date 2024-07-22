import { Routes } from '@angular/router';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'projects', component: ProjectPageComponent},

];

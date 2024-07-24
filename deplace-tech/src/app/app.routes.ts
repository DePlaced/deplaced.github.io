import { Routes } from '@angular/router';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'projects', component: ProjectPageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'contact', component: ContactPageComponent},

];

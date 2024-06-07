import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'/home'
    },
    {
        path:'home',
        component:LayoutComponent,
        children:[
            {
                path:'',
                component:HomeComponent
            },
            {
                path:'test',
                component:TestComponent
            }
        ]
    }
];

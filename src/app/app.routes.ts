import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Aboutus } from './pages/aboutus/aboutus';

export const routes: Routes = [{path:'', component:Home},{path:'products',component:Products},{path:'aboutus',component:Aboutus},
    {path:'home', component:Home}
];

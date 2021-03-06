import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {ManageMoviesComponent} from './manage-movies/manage-movies.component';
import {ManageActorActressComponent} from './manage-actor-actress/manage-actor-actress.component';
import {CanActivateGuard} from '../guards/can-activate.guard';
import {MovieEditComponent} from './movie-edit/movie-edit.component';
import {ResolveGuard} from '../guards/resolve.guard';
import {CanDeactivateGuard} from '../guards/can-deactivate.guard';
import {ActorActressEditComponent} from './actor-actress-edit/actor-actress-edit.component';

const adminRoutes: Routes = [
  { path: 'admin',
    component: AdminHomeComponent,
    canActivate: [CanActivateGuard],
    children: [
      { path: '',
        children: [
          { path: 'manage-movies',
            component: ManageMoviesComponent,
            children: [
              {path: ':id', component: MovieEditComponent, resolve: {movie: ResolveGuard}, canDeactivate: [CanDeactivateGuard] }
            ]},
          {path: 'manage-actor-actress', component: ManageActorActressComponent, children: [
              {path: ':id', component: ActorActressEditComponent}
            ]}
        ]}
    ]}
]
@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }

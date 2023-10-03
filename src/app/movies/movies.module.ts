import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WishListModule } from '../wish-list/wish-list.module';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [MoviesListComponent, MovieCardComponent],
  imports: [CommonModule, AppRoutingModule, SharedModule, WishListModule],
  exports: [MoviesListComponent, MovieCardComponent],
})
export class MoviesModule {}

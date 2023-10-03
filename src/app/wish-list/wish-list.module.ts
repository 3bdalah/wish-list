import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CardMovieListComponent } from './card-movie-list/card-movie-list.component';

@NgModule({
  declarations: [WishlistComponent, CardMovieListComponent],
  imports: [CommonModule],
  exports: [WishlistComponent, CardMovieListComponent],
})
export class WishListModule {}

import { Component } from '@angular/core';
import { WishListService } from './../wish-list.service';
import { MovieInterface } from 'src/app/movies/movie-interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent {
  containerWishList: any = [];
  constructor(private _WishListService: WishListService) {}

  ngOnInit() {
    this._WishListService.showwishList().subscribe((movies) => {
      console.log('movies results', movies);
      this.containerWishList = movies.results;
    });
  }
}

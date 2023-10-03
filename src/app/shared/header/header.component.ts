import { Component } from '@angular/core';
import { MovieInterface } from 'src/app/movies/movie-interface';
import { WishListService } from 'src/app/wish-list/wish-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  lengthWishList: number = 0;
  arrlength: MovieInterface[] = [];
  constructor(private _WishListService: WishListService) {}
  ngOnInit() {
    this._WishListService.showwishList().subscribe((movie) => {
      this.arrlength = movie;
      this.lengthWishList = this.arrlength.length;
    });
  }
}

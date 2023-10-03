import { Component } from '@angular/core';
import { WishListService } from 'src/app/wish-list/wish-list.service';
import { MovieInterface } from '../movie-interface';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  waitedlist: MovieInterface[] = [];
  containerAllMovies: MovieInterface[] = [];
  constructor(private _WishListService: WishListService) {}
  ngOnInit() {
    this._WishListService.showwishList().subscribe((movie) => {
      console.log('results wish list ', movie.results);
      this.waitedlist = movie.results;
    });

    this._WishListService.getAllMoviesPopular().subscribe((movies) => {
      let tempList = movies.results.map((item: MovieInterface, index: any) => {
        let checkFounded = this.waitedlist.find((movie) => movie.id == item.id);
        if (checkFounded) {
          return { ...item, isAdded: true }; // Set isAdded to true if in wish list
        } else {
          return { ...item, isAdded: false }; // Set isAdded to false if not in wish list
        }
      });
      this.containerAllMovies = tempList;
    });
  }

  ngOnChanges() {
    this._WishListService.showwishList().subscribe((movie) => {
      this.waitedlist = movie.results;
    });

    this._WishListService.getAllMoviesPopular().subscribe((movies) => {
      let tempList = movies.results.map((item: any, index: any) => {
        let checkFounded = this.waitedlist.find(
          (movie) => movie.id === item.id
        );
        if (checkFounded) {
          return { ...item, isAdded: true }; // Set isAdded to true if in wish list
        } else {
          return { ...item, isAdded: false }; // Set isAdded to false if not in wish list
        }
      });
      console.log('this conttainer list', this.containerAllMovies);
      this.containerAllMovies = tempList;
    });
  }

  handleToAddWishList(movieID: number) {
    console.log('clicked');
    this._WishListService.postMovieToWishList(movieID);
  }

  handleToRemoveFromList(movieID: number) {
    this._WishListService.removeMovieToWishList(movieID);
  }
}

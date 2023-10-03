import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MovieInterface } from '../movies/movie-interface';
@Injectable({
  providedIn: 'root',
})
export class WishListService {
  wishList: any = [];
  private wishListSubject = new BehaviorSubject<[]>([]);
  private lengthList = new BehaviorSubject<number>(0);
  private apiBaseUrl = 'https://api.themoviedb.org/3';
  private accountId = '19729259';
  private API_KEY = 'fd1abe0fb535494df40c06c72320b913';
  private URL_API_POPULAR =
    'https://api.themoviedb.org/3/movie/popular?api_key=';
  private MovieDetailesApi = 'https://api.themoviedb.org/3/movie/';
  private accountID = 19729259;
  private listWishSubject = new BehaviorSubject<MovieInterface[]>([]);
  constructor(private _HttpClient: HttpClient) {}

  // getAllmoviesWishList() {
  //   return this._HttpClient.get<any>(
  //     `https://api.themoviedb.org/3/account/${this.accountID}/watchlist/movies`,
  //     {
  //       headers: {
  //         accept: 'application/json',
  //         Authorization:
  //           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDFhYmUwZmI1MzU0OTRkZjQwYzA2YzcyMzIwYjkxMyIsInN1YiI6IjY0NzUzM2IzOTI0Y2U2MDBiZmQzZGY1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QAr9zbvolHwyzr3hobp9zIxzyH-K7bnjp4TQInYosls',
  //       },
  //     }
  //   );
  // }

  showwishList(): Observable<any> {
    const url =
      'https://api.themoviedb.org/3/account/19729259/watchlist/movies'; // Replace with the appropriate URL

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDFhYmUwZmI1MzU0OTRkZjQwYzA2YzcyMzIwYjkxMyIsInN1YiI6IjY0NzUzM2IzOTI0Y2U2MDBiZmQzZGY1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QAr9zbvolHwyzr3hobp9zIxzyH-K7bnjp4TQInYosls'
      );

    const params = new HttpParams()
      .set('language', 'en-US')
      .set('page', '1')
      .set('sort_by', 'created_at.asc');

    return this._HttpClient.get(url, { headers, params });
  }

  getAllMoviesPopular() {
    return this._HttpClient.get<any>(
      'https://api.themoviedb.org/3/movie/popular?api_key=fd1abe0fb535494df40c06c72320b913'
    );
  }

  postMovieToWishList(movieID: number) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDFhYmUwZmI1MzU0OTRkZjQwYzA2YzcyMzIwYjkxMyIsInN1YiI6IjY0NzUzM2IzOTI0Y2U2MDBiZmQzZGY1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QAr9zbvolHwyzr3hobp9zIxzyH-K7bnjp4TQInYosls'
      );

    let body = {
      media_type: 'movie',
      media_id: movieID,
      watchlist: true,
    };

    return this._HttpClient
      .post<any>(
        `https://api.themoviedb.org/3/account/${this.accountID}/watchlist`,
        body,
        {
          headers,
        }
      )
      .subscribe(
        (respon) => {
          console.log('wathc list response ', respon);
        },
        (error) => {
          console.log('erro watch resones', error);
        }
      );
  }

  removeMovieToWishList(movieID: number) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDFhYmUwZmI1MzU0OTRkZjQwYzA2YzcyMzIwYjkxMyIsInN1YiI6IjY0NzUzM2IzOTI0Y2U2MDBiZmQzZGY1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QAr9zbvolHwyzr3hobp9zIxzyH-K7bnjp4TQInYosls'
      );

    let body = {
      media_type: 'movie',
      media_id: movieID,
      watchlist: false,
    };

    return this._HttpClient
      .post<any>(
        `https://api.themoviedb.org/3/account/${this.accountID}/watchlist`,
        body,
        {
          headers,
        }
      )
      .subscribe(
        (respon) => {
          console.log('wathc list response ', respon);
        },
        (error) => {
          console.log('erro watch resones', error);
        }
      );
  }
}

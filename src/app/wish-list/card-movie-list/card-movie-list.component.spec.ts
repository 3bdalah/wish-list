import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMovieListComponent } from './card-movie-list.component';

describe('CardMovieListComponent', () => {
  let component: CardMovieListComponent;
  let fixture: ComponentFixture<CardMovieListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMovieListComponent]
    });
    fixture = TestBed.createComponent(CardMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

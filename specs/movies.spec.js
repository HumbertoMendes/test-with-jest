import { test } from '@jest/globals';
import movies from '../models/movies';

describe('Favorite Movies', () => {
  let myMovies = [];
  beforeEach(() => {
    myMovies = [
      {
        title: 'Age of Ultron',
        rate: null,
      }
    ];
  })

  test.only('can add a movie', () => {
    movies.add(myMovies, 'Avatar');
    expect(myMovies).toMatchSnapshot();
  });

  test.skip('rate a movie', () => {
    movies.rate(myMovies[0], 5);
    expect(myMovies).toMatchSnapshot();
  });
});
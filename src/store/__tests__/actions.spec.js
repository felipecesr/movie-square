import flushPromises from 'flush-promises';
import { getAll } from '@/services/movieService';
import * as actions from '../actions';
import * as types from '../mutation-types';

jest.mock('@/services/movieService');

describe('actions', () => {
  afterEach(() => getAll.mockClear());

  it('receiveMoviesSuccess calls commit with the result of getAll', async () => {
    expect.assertions(1);

    const data = {
      results: { '1': {}, '2': {} }
    };

    const page = 1;

    getAll.mockImplementation(calledWith => {
      return calledWith === page ? Promise.resolve(data) : Promise.resolve();
    });

    const context = {
      commit: jest.fn()
    };

    actions.receiveMoviesSuccess(context, data);
    await flushPromises();

    expect(context.commit).toHaveBeenCalledWith(
      types.RECEIVE_MOVIES_SUCCESS,
      data
    );
  });

  it('fetchMovies calls dispatch with the result of getAll', async () => {
    expect.assertions(2);

    const data = {
      results: { '1': {}, '2': {} }
    };

    getAll.mockImplementation(() => Promise.resolve(data));

    const context = {
      state: {
        page: 1
      },
      dispatch: jest.fn()
    };

    actions.fetchMovies(context);
    await flushPromises();

    expect(context.dispatch).toHaveBeenCalledWith('requestMovies');
    expect(context.dispatch).toHaveBeenCalledWith('receiveMoviesSuccess', data);
  });
});

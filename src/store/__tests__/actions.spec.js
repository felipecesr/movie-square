import flushPromises from 'flush-promises';
import { getPopularList } from '@/services/api/series';
import * as actions from '../actions';
import * as t from '../mutation-types';

jest.mock('@/services/api/series');

describe('actions', () => {
  afterEach(() => getPopularList.mockClear());

  it('requestPopularList should call commit with t.REQUEST_POPULAR_LIST', () => {
    const context = {
      commit: jest.fn()
    };

    actions.requestPopularList(context);
    expect(context.commit).toHaveBeenCalledWith(t.REQUEST_POPULAR_LIST);
  });

  it('receivePopularListSuccess calls commit with the result of getPopularList', async () => {
    expect.assertions(1);

    const data = {
      results: { '1': {}, '2': {} }
    };

    const page = 1;

    getPopularList.mockImplementation(calledWith => {
      return calledWith === page ? Promise.resolve(data) : Promise.resolve();
    });

    const context = {
      commit: jest.fn()
    };

    actions.receivePopularListSuccess(context, data);
    await flushPromises();

    expect(context.commit).toHaveBeenCalledWith(
      t.RECEIVE_POPULAR_LIST_SUCCESS,
      data
    );
  });

  it('fetchPopularList calls dispatch with the result of getPopularList', async () => {
    expect.assertions(2);

    // const normalize = jest.fn();

    const data = {
      page: 1,
      results: [
        { id: 1 },
        { id: 2 }
      ]
    };

    getPopularList.mockImplementation(() => Promise.resolve({ data }));

    const context = {
      state: {
        page: 1
      },
      dispatch: jest.fn()
    };

    actions.fetchPopularList(context);
    await flushPromises();

    expect(context.dispatch).toHaveBeenCalledWith('requestPopularList');
    expect(context.dispatch).toHaveBeenCalledWith('receivePopularListSuccess', data);
  });
});

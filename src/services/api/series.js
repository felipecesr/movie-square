import api from './config';
import { normalize } from './utils';

const resource = '/tv';

export const fetchPopularList = page => {
  return api
    .get(`${resource}/popular`, { params: { page } })
    .then(({ data }) => normalize(data.results));
};

export const fetchDetails = tvId => {
  return api.get(`${resource}/${tvId}`).then(({ data }) => data);
};

export const fetchSeason = (tvId, number) => {
  return api
    .get(`${resource}/${tvId}/season/${number}`)
    .then(({ data }) => data);
};

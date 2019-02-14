import api from './config';

const resource = '/tv';

export const getPopularList = page => {
  return api.get(`${resource}/popular`, { params: { page } });
};

export const getDetails = serieId => {
  return api.get(`${resource}/${serieId}`);
};

export const getSeason = (serieId, number) => {
  return api.get(`${resource}/${serieId}/season/${number}`);
};

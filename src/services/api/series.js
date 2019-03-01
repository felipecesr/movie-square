import api from './config';

const resource = '/tv';

export const getPopularList = page => {
  return api.get(`${resource}/popular`, { params: { page } });
};

export const getDetails = serieId => {
  return api.get(`${resource}/${serieId}`, { params: { append_to_response: 'videos' } });
};

export const getSeason = (serieId, number) => {
  return api.get(`${resource}/${serieId}/season/${number}`);
};

import api from '@/services/api';
import { normalize } from '../util/normalize';

export const getAll = async page => {
  const { data } = await api.get(`/tv/popular`, { params: { page } });

  return {
    page: data.page,
    results: normalize(data.results)
  };
};

export const getOne = async id => {
  const { data } = await api.get(`/tv/${id}`);

  return data;
};

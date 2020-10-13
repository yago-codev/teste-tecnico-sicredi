import axios, { AxiosPromise } from 'axios';

const api = axios.create({
  baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1',
});

export interface IDragons {
  id: string;
  name: string;
  type: string;
  histories: string[];
  createdAt: Date;
}

export const getDragons: () => AxiosPromise<IDragons[]> = () =>
  api.get('/dragon');

export const getDragon: (id: string) => AxiosPromise<IDragons> = (id: string) =>
  api.get(`/dragon/${id}`);

export const createDragon: (
  name: string,
  type: string,
  histories: any,
) => AxiosPromise<IDragons> = (name: string, type: string, histories: any) =>
  api.post(`/dragon`, { name, type, histories });

export const updateDragon: (
  id: string,
  name: string,
  type: string,
  histories: any,
) => AxiosPromise<IDragons> = (
  id: string,
  name: string,
  type: string,
  histories: any,
) => api.put(`/dragon/${id}`, { name, type, histories });

export const deleteDragon: (id: string) => AxiosPromise<IDragons> = (
  id: string,
) => api.delete(`/dragon/${id}`);

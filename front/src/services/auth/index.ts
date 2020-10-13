import axios, { AxiosPromise } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export interface IUser {
  email: string;
  id: string;
}

export interface IAuth {
  user: {
    id?: string;
    email: string;
  };
  token: string;
}

export const createUser: (
  email: string,
  password: string,
) => AxiosPromise<IUser> = (email: string, password: string) =>
  api.post('/users', { email, password });

export const createAuth: (
  email: string,
  password: string,
) => AxiosPromise<IAuth> = (email: string, password: string) =>
  api.post('/auth', { email, password });

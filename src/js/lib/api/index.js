import * as mockApi from './mock';
import * as api from './api';

const mock = !!process.env.MOCK_API;
export const login = mock ? mockApi.login : api.login;
export const getUser = mock ? mockApi.getUser : api.getUser;

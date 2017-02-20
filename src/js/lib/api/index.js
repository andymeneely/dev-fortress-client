import * as mockApi from './mock';
import * as api from './api';

module.exports = process.env.MOCK_API ? mockApi : api;

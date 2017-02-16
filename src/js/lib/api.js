import request from 'browser-request';

export const BASE_URL = 'http://localhost:3000/api';

export function login(username, password, callback) {
  return request({
    method: 'POST',
    url: `${BASE_URL}/login`,
    json: {
      username,
      password,
    },
  }, (err, res, body) => {
    if (err) {
      return callback(err);
    }
    // something went wrong
    if (res.statusCode !== 200) {
      return callback(body);
    }
    return callback(null, body);
  });
}

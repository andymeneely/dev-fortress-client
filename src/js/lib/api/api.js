import request from 'browser-request';

export const BASE_URL = 'http://localhost:3000/api';

export function login(username, password, callback) {
  return request({
    method: 'POST',
    url: `${BASE_URL}/user/login`,
    json: {
      username,
      password,
    },
  }, (err, res, body) => {
    if (err) {
      return callback(err);
    }
    // something went wrong
    if (res.statusCode < 200 || res.statusCode >= 300) {
      return callback(body);
    }
    return callback(null, body);
  });
}

export function getUser(userId, token, callback) {
  return request({
    method: 'GET',
    url: `${BASE_URL}/user/${userId}?withRelated=roles`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    json: true,
  }, (err, res, body) => {
    if (err) {
      return callback(err);
    }
    if (res.statusCode < 200 || res.statusCode >= 300) {
      return callback(body);
    }
    return callback(null, body);
  });
}

export function createUser(username, password, email, name, isAdmin, token, callback) {
  return request({
    method: 'POST',
    url: `${BASE_URL}/user`,
    json: {
      username,
      password,
      email,
      name,
      is_admin: isAdmin,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }, (err, res, body) => {
    if (err) {
      return callback(err);
    }
    if (res.statusCode < 200 || res.statusCode >= 300) {
      return callback(body);
    }
    return callback(null, body);
  });
}

export function refreshToken(token, callback) {
  return request({
    method: 'POST',
    url: `${BASE_URL}/user/refresh`,
    json: {},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }, (err, res, body) => {
    if (err) {
      return callback(err);
    }
    if (res.statusCode < 200 || res.statusCode >= 300) {
      return callback(body);
    }
    return callback(null, body);
  });
}

export function createGame(gameName, numRounds, token, callback) {
  return request({
    method: 'POST',
    url: `${BASE_URL}/game`,
    json: {
      name: gameName,
      max_round: numRounds,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }, (err, res, body) => {
    if (err) {
      return callback(err);
    }

    if (res.statusCode === 400) {
      return callback(body.error);
    }

    if (res.statusCode < 200 || res.statusCode >= 300) {
      return callback(body);
    }
    return callback(null, body);
  });
}


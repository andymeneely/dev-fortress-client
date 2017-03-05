const LATENCY = 500;

const roles = [
  {
    id: 0,
    name: 'professor',
  },
];

const mockUsers = [
  {
    id: 0,
    username: 'admin',
    name: 'joe',
    email: 'admin@admin.com',
    is_admin: true,
    created_at: '2017-02-14 15:09:15',
    roles: [],
  },
  {
    id: 1,
    username: 'meneely',
    name: 'Andy Meneely',
    email: 'andy@email.com',
    is_admin: false,
    created_at: '2017-02-14 15:09:15',
    roles: [roles[0]],
  },
];

const mockTokens = {
  admin: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjAsImlhdCI6MTQ4ODE0NjI4MiwiZXhwIjoxNTg4MTQ4MDgyfQ.k0flOL57viBTyt4TqnVpDOj371EVDbc8Do0l_mGcq7k',
  meneely: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTQ4ODE0NjI4MiwiZXhwIjoxNTg4MTQ4MDgyfQ.EC92y5uMX27yEj8jAMuYf3zEJcn4zBsK3dCWXI7tAmU',
};

export function login(username, password, callback) {
  const uName = username.toLowerCase();
  setTimeout(
    () => {
      if (mockTokens[uName]) {
        return callback(null, { token: mockTokens[uName] });
      }
      return callback({
        error: 'User not found!',
      });
    }
  , LATENCY);
}

export function getUser(userId, token, callback) {
  setTimeout(
    () => {
      if (userId < mockUsers.length && userId >= 0) {
        return callback(null, mockUsers[userId]);
      }
      return callback({
        error: 'User not found!',
      });
    }
  , LATENCY);
}

export function createUser(username, password, email, name, isAdmin, token, callback) {
  setTimeout(
    () => {
      const newUser = {
        id: mockUsers.length,
        username,
        name,
        is_admin: isAdmin,
        email,
        created_at: Date.now(),
        roles: [],
      };

      mockUsers.push(newUser);

      return callback(null, newUser);
    }
  , LATENCY);
}

export function refreshToken(token, callback) {
  setTimeout(
    () => callback(null, { token }),
    LATENCY);
}


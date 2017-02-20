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
    is_admin: true,
    created_at: '2017-02-14 15:09:15',
    roles: [],
  },
  {
    id: 1,
    username: 'meneely',
    name: 'Andy Meneely',
    is_admin: false,
    created_at: '2017-02-14 15:09:15',
    roles: [roles[0]],
  },
];

const mockTokens = {
  admin: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjB9.luswNymj4MFNkzYgXSGeuh2S0Hn2nH-3P6IT7Al03xU',
  meneely: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjF9.s4vE0w6cUg68FMf7GjCRpweMCQ92MdFjYM5apky7MHE',
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

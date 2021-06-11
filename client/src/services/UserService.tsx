import api from './api';

class UserService {
  create(payload: {}) {
    return api.post('/users/register', payload);
  }

  getId(username: string) {
    return api.get(`/users/${username}`);
  }

  // getAll() {
  //   return api.get(`/users`);
  // }

  getUsersPosts() {
    return api.get(`/users`);
  }
}

export default new UserService();

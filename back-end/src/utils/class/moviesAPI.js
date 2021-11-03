const { RESTDataSource } = require('apollo-datasource-rest');

class MoviesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/';
  }

  async getMovie(id) {
    const resp = await this.get(`movie/${id}?api_key=178e7bf675e0abd6aa255f320f583d29`);
    return resp;
  }

  async getMovies(title) {
    const data = await this.get('search/movie?api_key=178e7bf675e0abd6aa255f320f583d29', {
      query: title
    });
    return data.results;
  }
}

module.exports = {
    MoviesAPI
};
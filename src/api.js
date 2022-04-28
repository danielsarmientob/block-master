import { API_KEY } from './constants.js'

class API {
  constructor(API_KEY) {
    this.API_KEY = API_KEY
  }
  baseAPI = 'https://api.themoviedb.org/3/'
  get discoverMovie() {
    return `${this.baseAPI}discover/movie?api_key=${this.API_KEY}`
  }
  async moviePage(page) {
    const response = await fetch(`${this.discoverMovie}&page=${page}`)
    const data = await response.json()
    return data
  }
  async movieDetalles(id) {
    const response = await fetch(
      `${this.baseAPI}movie/${id}?api_key=${this.API_KEY}`
    );
    return await response.json();
  }
}

export default new API(API_KEY)
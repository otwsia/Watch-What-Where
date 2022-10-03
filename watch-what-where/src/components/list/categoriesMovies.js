const API_key = "decb776a782c2ad315d5469877220f3d";

const categoriesMovies = {
  trending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_key}`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}`,
  action: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=28`,
  comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=35`,
  horror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=27`,
  romance: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=10749`,
};

export default categoriesMovies;

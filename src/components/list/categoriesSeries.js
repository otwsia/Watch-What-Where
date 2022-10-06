const API_key = "decb776a782c2ad315d5469877220f3d";

const categoriesSeries = {
  trending: `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_key}`,
  topRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_key}`,
  action: `https://api.themoviedb.org/3/discover/tv?api_key=${API_key}&with_genres=16`,
  comedy: `https://api.themoviedb.org/3/discover/tv?api_key=${API_key}&with_genres=35`,
  horror: `https://api.themoviedb.org/3/discover/tv?api_key=${API_key}&with_genres=9648`,
  romance: `https://api.themoviedb.org/3/discover/tv?api_key=${API_key}&with_genres=10749`,
  seriesSearch: `https://api.themoviedb.org/3/search/tv?api_key=${API_key}&query=`,
};

export default categoriesSeries;

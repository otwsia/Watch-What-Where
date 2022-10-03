let type = "movie";

const API_key = "decb776a782c2ad315d5469877220f3d";

const categories = {
  trending: `https://api.themoviedb.org/3/trending/${type}/week?api_key=${API_key}`,
  topRated: `https://api.themoviedb.org/3/${type}/top_rated?api_key=${API_key}`,
  action: `https://api.themoviedb.org/3/discover/${type}?api_key=${API_key}&with_genres=28`,
  comedy: `https://api.themoviedb.org/3/discover/${type}?api_key=${API_key}&with_genres=35`,
  horror: `https://api.themoviedb.org/3/discover/${type}?api_key=${API_key}&with_genres=27`,
  romance: `https://api.themoviedb.org/3/discover/${type}?api_key=${API_key}&with_genres=10749`,
};

export default categories;

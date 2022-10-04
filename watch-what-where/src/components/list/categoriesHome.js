const API_key = "decb776a782c2ad315d5469877220f3d";

const categoriesHome = {
  trending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_key}`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}`,
};

export default categoriesHome;

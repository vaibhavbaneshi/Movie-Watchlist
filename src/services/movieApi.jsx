const apiKey = '80ca5599';
const apiUrl = 'http://www.omdbapi.com/';

export const searchMovies = async (searchValue) => {
  const url = `https://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=6a616cc4`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.Search || [];
  } catch (error) {
    console.error('Error fetching from API:', error);
    throw error;
  }
};

export const getPopularMovies = async () => {
  // Using a popular search term as an example
  return searchMovies('Avengers');
};
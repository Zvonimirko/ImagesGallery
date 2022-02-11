export const fetchImages = async (searchQuery) => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchQuery}}&per_page=20&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
    );
    const data = await res.json();
    return data.results;
  } catch (err) {
    return console.log(err);
  }
};

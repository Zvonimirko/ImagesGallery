export const fetchImage = async (searchQuery) => {
  const API_URL =
    process.env.REACT_APP_API_URL || 'http://localhost:5050/new-images';

  try {
    const res = await fetch(`${API_URL}?query=${searchQuery}`);
    const data = await res.json();
    if (data.errors) {
      return;
    }
    return data;
  } catch (err) {
    console.log(err);
  }
};

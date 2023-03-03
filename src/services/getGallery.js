import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '32972281-0765619f1e89c459ff8e86751';

export async function fetchGalleryImageWithQuer(searchQuery, page) {
  const images = await axios.get(
    `/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return images.data;
}

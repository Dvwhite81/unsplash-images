import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './hooks';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

export const useSearch = () => {
  const { searchTerm } = useGlobalContext();

  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  return response;
};

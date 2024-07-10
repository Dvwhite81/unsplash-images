import { useGlobalContext } from '../utils/hooks';
import { useSearch } from '../utils/queries';
import { ImageType } from '../utils/types';

const Gallery = () => {
  const response = useSearch();

  const { searchTerm } = useGlobalContext();
  let content;

  if (!searchTerm.length) content = <h4>Enter a search term...</h4>;
  else if (response.isLoading) content = <h4>...Loading</h4>;
  else if (response.isError) content = <h4>There was an error...</h4>;
  else if (response.data.results && response.data.results.length < 1)
    content = <h4>No results found...</h4>;
  else
    content = response.data.results.map((item: ImageType) => {
      const url = item?.urls?.regular;
      return (
        <img
          src={url}
          key={item.id}
          alt={item.description}
          className="img"
        ></img>
      );
    });

  return <section className="image-container">{content}</section>;
};

export default Gallery;

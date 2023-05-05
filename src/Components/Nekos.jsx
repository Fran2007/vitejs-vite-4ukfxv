import { useFetch } from '../CustomHooks/useFetch';

export const Nekos = ({ url, artist_name }) => {
  const { data, fetchData } = useFetch('https://nekos.best/api/v2/neko');

  return (
    <div>
      {data.map(() => (
        <li>
          <img src={url} height="200px" width="200px" />
          <p>{artist_name}</p>
        </li>
      ))}
    </div>
  );
};

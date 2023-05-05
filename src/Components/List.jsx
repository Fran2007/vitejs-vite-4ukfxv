import { useFetch } from '../CustomHooks/useFetch';
import { Nekos } from './Nekos';

export function List() {
  const { data, fetchData } = useFetch(
    'https://nekos.best/api/v2/neko?amount=1'
  );

  return (
    <div>
      <button onClick={fetchData}>Generate</button>
      {data.map((ul) => (
        <Nekos key={ul.url} {...ul} />
      ))}
    </div>
  );
}

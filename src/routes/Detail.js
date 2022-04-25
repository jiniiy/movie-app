import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';

function Detail() {
  const { id } = useParams(); //React Router로 url로 id를 통해 해당하는 url찾는다!!!
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState({});

  // () => void
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log('test03');
    console.log(json);
    setMovieDetail(json.data.movie);
    setLoading(false);
    console.log('movie', movieDetail);
    console.log('test04');
  };

  useEffect(() => {
    // ({id: number}) => void
    getMovieDetail();
  }, []);
  // useEffect(() => {
  //   getMovieDetail();
  // }, []);
  console.log(id);
  console.log('test02');
  console.log('movie', movieDetail);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>detail</h1>
          <div>productID:{id}</div>
          <h1>{movieDetail.title}</h1>
          <h2>{movieDetail.title_long}</h2>
          <p>{movieDetail.description_intro}</p>
          <div>
            <ul>
              <li>Rating:{movieDetail.rating}</li>
              <li>Runtime:{movieDetail.runtime}</li>
            </ul>
          </div>
          <div>
            <img src={movieDetail.background_image} alt={movieDetail.title} />
          </div>
          <p> {movieDetail.description_full} </p>
        </div>
      )}
    </div>
  );
}

export default Detail;

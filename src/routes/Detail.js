import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';

function Detail() {
  const { id } = useParams(); //React Router로 url로 id를 통해 해당하는 url찾는다!!!
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);

  const getMovieDetail = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log('test03');
    console.log(json);
    setMovieDetail(json.data.movieDetail);
    setLoading(false);
    console.log('test04');
  }, [id]);

  useEffect(() => {
    getMovieDetail();
  }, [getMovieDetail]);
  // useEffect(() => {
  //   getMovieDetail();
  // }, []);
  console.log(id);
  console.log('test02');
  console.log("movie",movieDetail)
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>detail</h1>
          {movieDetail &&
            movieDetail.map((item) => (
              <MovieDetail
                key={item.id} //화면에서 안나오는 부분!!!!!!! 시작점
                id={item.id}
                title_long={item.title_long}
                description_intro={item.description_intro}
                rating={item.rating}
                runtime={item.runtime}
                background_image={item.background_image}
                description_full={item.description_full} //화면에서 안나오는 부분!!!!!!! 끝
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default Detail;

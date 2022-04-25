import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MovieDetail({
  id,
  //   title,
  //   genres,
  title_long,
  description_intro,
  rating,
  runtime,
  background_image,
  description_full,
}) {
  //sending props
  return (
    <div>
      <img src={background_image} alt={title_long} />
      <h2>{title_long}</h2>
      <p>{description_intro}</p>
      <p>{description_full}</p>
      <ul>
        <li>rating:{rating}</li>
        <li>{runtime}minutes</li>
      </ul>
    </div>
  );
}

MovieDetail.propTypes = {
  //Detail prop
  id: PropTypes.number.isRequired,
  title_long: PropTypes.string.isRequired,
  description_intro: PropTypes.string.isRequired,
  //   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  background_image: PropTypes.string.isRequired,
  description_full: PropTypes.string.isRequired,
};

export default MovieDetail;

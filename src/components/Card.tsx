import { Link } from "react-router-dom";
import { CardProps } from "../interfaces";

const Card = (props: CardProps) => {
  return (
    <article id={`${props.key}`}>
      <div className='wrapper'>
        <div className='card-header'>
          <img className='profile-thumbnail' src={props.profileImgSrc} alt={props.author} />
          {/* actually the src should be more like {process.env.PUBLIC_URL + image} except you haven't set up process.env yet */}
          <div className='author-date-container'>
            <span>{props.author}</span>
            <span> · </span>
            <span>{props.date}</span>
          </div>
        </div>
        <div className='thumbnail-width'></div>
      </div>

      <div className='card-body'>
        <div className='blurb-container'>
          <Link to={props.titleLink}>
            <h2>{props.title}</h2>
          </Link>
          <p className='blurb'>{props.blurbContent}.</p>
        </div>
        <img className='post-thumbnail xs-only' src={props.postImgSrc} alt={props.title} />
      </div>

      <div className='wrapper'>
        <div className='card-footer'>
          <Link to={props.tagLink}>
            {/* Dynamically generate tag links with a map function */}
            <div className='tag'>{props.tag}</div>
          </Link>
        </div>
        <div className='thumbnail-width'></div>
      </div>
    </article>
  );
};

export default Card;

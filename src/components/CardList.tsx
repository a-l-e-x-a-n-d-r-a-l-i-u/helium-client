import { Link } from "react-router-dom";
import Card from "./Card";
import postlist from "../posts.json";
import profilePlaceholder from "../assets/images/thispersondoesnotexist.jpeg";
import postPlaceholder from "../assets/images/post-thumbnail-placeholder.jpg";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

// Use a compressed version of images, otherwise it will take forever to load on a speedtest
const CardList = () => {
  return (
    <div className='card-list'>
      {postlist.map((post, i) => {
        return (
          <Card
            key={post.id}
            author={post.author}
            date={post.date}
            title={post.title}
            titleLink={`/post/${post.id}`}
            blurbContent={`${post.content.split(".")[0]}`}
            tag={capitalizeFirstLetter(post.tag)}
            tagLink={`/tag/${post.tag}`}
            profileImgSrc={profilePlaceholder}
            postImgSrc={postPlaceholder}
          />
        );
      })}
    </div>
  );
};

export default CardList;

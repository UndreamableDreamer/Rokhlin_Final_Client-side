import { Tags } from "./PostTags.props";
import './PostTags.css'

const PostTags = ({ tags }: Tags) => {
  return (
    <div className='post__tags tag-array'>Теги:
      {tags.map(tag => (
        <p className='tag-array__element' key={tag.id}>{tag.name}</p>
      ))}
    </div>
  );
};

export default PostTags;

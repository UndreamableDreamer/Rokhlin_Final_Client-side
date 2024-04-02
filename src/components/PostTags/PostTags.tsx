import { Tags } from './PostTags.props';

const PostTags = ({ tags }: Tags) => {
  return (
    <span className='meta__tags tag-array'>Теги:
      {tags.map(tag => (
        <span className='tag-array__element' key={tag.id}>{tag.name}</span>
      ))}
    </span>
  );
};

export default PostTags;

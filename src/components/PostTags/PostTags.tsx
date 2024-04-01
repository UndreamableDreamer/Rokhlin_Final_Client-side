import { Tags } from './PostTags.props';

const PostTags = ({ tags }: Tags) => {
  return (
    <div className='meta__tags tag-array'>Теги:
      {tags.map(tag => (
        <p className='tag-array__element' key={tag.id}>{tag.name}</p>
      ))}
    </div>
  );
};

export default PostTags;

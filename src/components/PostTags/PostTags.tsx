import { TagsProps } from './PostTags.props';

const PostTags = ({ tags }: TagsProps) => {
  return (
    <span className='meta__tags tag-array'>Теги:
      {tags.map(tag => (
        <a href={tag.name} className='tag-array__element' key={tag.id}>#{tag.name}</a>
      ))}
    </span>
  );
};

export default PostTags;

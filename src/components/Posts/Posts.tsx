import { Box } from '@mui/material';
import PostCard from '../PostCard/PostCard';

import { PostsProps } from './Posts.props';
import { news } from './posts.module';

const Posts = ({ posts }: PostsProps) => {
  return (
    <Box className='parent__news news' sx={news}>
      {posts.map(post =>
        <PostCard
          key={post.id}
          title={post.title}
          content={post.content}
          imageUrl={post.imageUrl}
          updatedAt={post.updatedAt}
          user={post.user}
          tags={post.tags}
        />
      )}
    </Box>
  );
};

export default Posts;

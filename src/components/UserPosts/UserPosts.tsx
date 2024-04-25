import { Box } from '@mui/material';

import PostCard from '../PostCard/PostCard';

import { UserPostsProps } from './userPosts.props';
import { news } from './styles';

const UserPosts = ({ posts, user }: UserPostsProps) => {
  return (
    <>
      <Box className='news' sx={news}>
        {posts.map(post =>
          <PostCard
            key={post.id}
            title={post.title}
            content={post.content}
            imageUrl={post.imageUrl}
            updatedAt={post.updatedAt}
            user={user}
            tags={post.tags}
          />
        )}
      </Box>
    </>
  );
};

export default UserPosts;

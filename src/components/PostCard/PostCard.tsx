import { Link } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

import Tags from '../Tags/Tags';
import { Post } from '../../types/postsInterfaces';
import formatDate from '../../helpers/formatDate';

import { 
  postMedia, 
  postWrapper, 
  authorStyle,
  contentStyle,
  metaStyle,
  dateStyle
} from './styles';

const PostCard = (
  {
    title, 
    content, 
    imageUrl, 
    updatedAt, 
    user, 
    tags 
  }: Post) => {
  return (
    <Card className='news__post post' sx={postWrapper}>
      <CardMedia className='post__media'
        component='img'
        image={imageUrl}
        sx={postMedia}
      />
      <CardContent className='post__content content'>
        <Typography className='content__title' gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography 
          className='content__text' 
          variant='body2'
          sx={contentStyle}>
          {content}
        </Typography>
        <Box
          className='content__meta meta' 
          sx={metaStyle} 
        >
          <Tags tags={tags} />
          <Typography className='meta__author author' sx={authorStyle} >
            Автор:&nbsp;
            <Typography             
              component={Link}
              sx={authorStyle}
              className='author__login'
              to={`/${user.login}`}
            >
              {user.login} 
            </Typography>
          </Typography>
          <Typography className='meta__updated-at' sx={dateStyle}>
            Последнее обновление: {formatDate(updatedAt.toLocaleString())}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;

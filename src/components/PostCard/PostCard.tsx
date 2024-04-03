import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { PostInterface } from '../../types/types';
import PostTags from '../PostTags/PostTags';

import './post-card-module.css';

const PostCard = (
  { 
  title, 
  content, 
  imageUrl, 
  updatedAt, 
  user, 
  tags }: PostInterface 
  ) => {
  return (
    <Card className='wrapper__post post'>
      <CardMedia className='post__media'
        component='img'
        alt='cat'
        height='300'
        image={imageUrl}
        sx={{ objectFit: 'fill' }}
      />
      <CardContent className='post__content content'>
        <Typography className='content__title' gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography className='content__text' variant='body2' color='text.secondary'>
          {content}
        </Typography>
        <Typography className='content__meta meta' variant='body2' color='text.secondary'>
          <PostTags tags={tags}/>
          <label className='meta__author'>Автор: {user.login}</label>
          <label className='meta__updated-at'>
            Последнее обновление: {updatedAt.toLocaleString()}
          </label>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;

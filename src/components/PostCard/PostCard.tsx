import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import Tags from '../Tags/Tags';
import { Post } from '../../types/posts-interfaces';
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
          <Typography className='meta__author' sx={authorStyle} >
            Автор: {user.login} 
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

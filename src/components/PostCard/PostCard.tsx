import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import formatDate from '../../helpers/formatDate';
import { PostInterface } from '../../types/types';
import Tags from '../Tags/Tags';

import { 
  postMedia, 
  postAuthor, 
  postContentText, 
  postInfo, 
  postMeta, 
  postUpdatedAt, 
  secondaryColor, 
  postWrapper 
} from './post-card.module';
import { Box } from '@mui/material';

const PostCard = (
  {
    title, 
    content, 
    imageUrl, 
    updatedAt, 
    user, 
    tags 
  }: PostInterface) => {
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
          sx={[postContentText, secondaryColor]}>
          {content}
        </Typography>
        <Box
          className='content__meta meta' 
          sx={[postMeta, secondaryColor]} 
        >
          <Tags tags={tags} />
          <Typography className='meta__author' sx={[postAuthor, postInfo]} >
            Автор: {user.login} 
          </Typography>
          <Typography className='meta__updated-at' sx={[postUpdatedAt, postInfo]}>
            Последнее обновление: {formatDate(updatedAt.toLocaleString())}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;

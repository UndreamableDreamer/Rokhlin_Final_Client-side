import { Box, Typography } from '@mui/material';

import { TagsProps } from './tags.props';
import { eachTagStyles, tagsArrayStyles } from './styles';

const Tags = ({ tags }: TagsProps) => {
  return (
    <Box className='meta__tags tags' sx={tagsArrayStyles}>Теги:
      {tags.map(tag => (
        <Typography
          variant='body2'
          className='tags__element' 
          key={tag.id}
          sx={eachTagStyles}
        >
          #{tag.name}
        </Typography>
      ))}
    </Box>
  );
};

export default Tags;

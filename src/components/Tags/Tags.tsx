import { Box, Typography } from '@mui/material';

import { TagsProps } from './tags.props';
import { tagStyle, tagsStyle } from './tags.module';

const Tags = ({ tags }: TagsProps) => {
  return (
    <Box className='meta__tags tags' sx={tagsStyle}>Теги:
      {tags.map(tag => (
        <Typography
          variant='body2'
          className='tags__element' 
          key={tag.id}
          sx={tagStyle}
        >
          #{tag.name}
        </Typography>
      ))}
    </Box>
  );
};

export default Tags;

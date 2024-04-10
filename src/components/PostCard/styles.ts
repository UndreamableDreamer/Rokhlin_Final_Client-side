const postContent = {
  lineClamp: 2,
  WebkitLineClamp: 4,
  overflow: 'hidden',
  marginBottom: '10px',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical'
};

const author = { gridArea: 'author' };

const postUpdatedAt = { gridArea: 'updatedAt' };

const secondaryColor = { color: 'text.secondary', };

const postMeta = {
  display: 'grid',
  position: 'absolute',
  bottom: '10px',
  gridTemplate: `
    "tags author" auto
    "tags updatedAt" auto
    / 2fr 1fr `
};

export const postWrapper = {
  maxWidth: '600px',
  minWidth: '600px',
  minHeight: '525px',
  position: 'relative',
  height: 'fit-content',
  display: 'inline-block',
  border: 'black solid 2px',
  margin: '0 10px 20px 10px',
  background: 'rgb(239, 222, 214)',
};

export const postMedia = {
  height: '300px',
  alt: 'picture',
  objectFit: 'fill'
};

export const postInfo = {
  fontStyle: 'italic',
  fontSize: '12px',
  opacity: '60%',
  margin: '0',
  alignSelf: 'end',
};

export const authorStyle = [author, postInfo];

export const contentStyle = [postContent, secondaryColor];

export const metaStyle = [postMeta, secondaryColor];

export const dateStyle = [postUpdatedAt, postInfo];


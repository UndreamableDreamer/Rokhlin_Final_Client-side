export const profileWrapper = {
  margin: '10px',
  border: '2px solid black',
  padding: '10px',
  top: '10px',
  left: '20px',
  display: 'grid',
  maxWidth: '400px',
  gridTemplate: `
  'avatar metaInfo' auto
  / auto auto `,
  overflow: 'hidden',
  borderRadius: '10px',
  backgroundColor: 'rgb(209, 202, 186)'
};

export const avatar = {
  height: '200px',
  width: '200px',
  border: '2px solid black',
  gridArea: 'avatar',
};

export const metaInfo = {
  gridArea: 'metaInfo',
  paddingLeft: '10px',
  display: 'flex',
  flexWrap: 'wrap'
};

export const infoCreated = {
  placeSelf: 'end',
  fontSize: '10px',
  opacity: '50%',
  fontStyle: 'italic',
  fontWeight: 'bolder'
};

export const infoName = {
  marginTop: '20px'
};


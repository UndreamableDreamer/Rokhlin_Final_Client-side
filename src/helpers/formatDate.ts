const formatDate = (updatedAt: string) => {
  const toFormat = new Date(updatedAt);
  return toFormat.toLocaleString();
};

export default formatDate;

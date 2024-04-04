const formatDate = (updatedAt: string): string => {
  const formattedDate = new Date(updatedAt);
  return formattedDate.toLocaleString();
};

export default formatDate;

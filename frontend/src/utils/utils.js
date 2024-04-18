export const formatLabelText = (text) => {
  const parts = text.match(/([a-zA-Z]+)(\d+)/);

  return `${parts[1]}-${parts[2]}`;
};

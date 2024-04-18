const setFugitiveLocation = async () => {
  try {
    await fetch('/api/reset-game', { method: 'POST' });
  } catch (error) {
    console.log(error);
  }
};

export default setFugitiveLocation;

const fetchData = async (payload) => {
  try {
    const res = await fetch('/api/app-data');
    if (res.ok) {
      const data = await res.json();
      return { success: true, data };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;

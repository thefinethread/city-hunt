const fetchData = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/app-data');
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

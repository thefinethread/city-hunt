const fetchResult = async (payload) => {
  try {
    const res = await fetch('/api/result', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      return { success: false, message: 'Something went wrong!' };
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchResult;

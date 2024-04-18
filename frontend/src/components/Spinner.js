const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-full w-full'>
      <div
        className={`border-[3px] border-solid h-14 w-14 border-blue-600 rounded-full border-b-transparent animate-spin`}
      ></div>
    </div>
  );
};

export default Spinner;

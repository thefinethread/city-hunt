const Spinner = ({ size = 14, color = 'border-blue-600' }) => {
  return (
    <div className='flex justify-center items-center h-full w-full'>
      <div
        className={`border-[3px] border-solid h-${size} w-${size} ${color} rounded-full border-b-transparent animate-spin`}
      ></div>
    </div>
  );
};

export default Spinner;

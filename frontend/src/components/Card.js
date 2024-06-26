const Card = ({ img, label, onClick, completed = false }) => {
  return (
    <button
      onClick={onClick}
      className={`block rounded-xl relative p-2 cursor-pointer border-2 border-solid hover:scale-105 transition-transform ${
        completed ? 'border-green-500 border-[3px]' : 'border-zinc-500'
      }`}
    >
      <img
        src={img}
        alt={label}
        className='w-40 h-40 object-cover rounded-lg'
      />

      <div className='absolute top-0 left-0 h-full w-full rounded-lg bg-gradient-to-t from-zinc-950 to-transparent to-50% '></div>
      <span className='absolute bottom-1 left-0 w-full '>{label}</span>
    </button>
  );
};

export default Card;

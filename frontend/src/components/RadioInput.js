const RadioInput = ({
  onChange,
  img,
  value,
  label,
  name,
  checked = false,
  disabled = false,
}) => {
  return (
    <label
      className={`block relative rounded-xl p-2 cursor-pointer border-2 border-solid transition-transform ${
        checked ? 'border-green-500 border-[3px]' : 'border-zinc-500'
      } ${disabled ? 'cursor-not-allowed hover:scale-100' : 'hover:scale-105'}`}
    >
      <input
        type='radio'
        name={name}
        className='hidden'
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <img
        src={img}
        alt={label}
        className={`w-40 h-40 object-cover rounded-lg ${
          disabled ? 'grayscale' : ''
        }`}
      />
      <div className='absolute top-0 left-0 h-full w-full rounded-lg bg-gradient-to-t from-zinc-950 to-transparent to-50% '></div>
      <span className='absolute text-center bottom-1 left-0 w-full '>
        {label}
      </span>
    </label>
  );
};

export default RadioInput;

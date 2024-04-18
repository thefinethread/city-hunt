import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='bg-[#171717] text-slate-300 overflow-auto h-screen w-screen p-2 font-comic font-semibold tracking-wider '>
      <div className='max-w-6xl h-full  w-full m-auto px-4 '>
        <Outlet />
      </div>
    </div>
  );
}

export default App;

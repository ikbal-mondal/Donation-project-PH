
const Banner = () => {
    const backgroundImageUrl = 'https://uploads-ssl.webflow.com/62d539593504f1e73d2c19b6/644568d067b7ef100a3c1eaf_decide%20a%20method%20of%20communication.png';
  return (
    <div
    className="relative h-[70vh]"
    style={{
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
     borderRadius:'10px' 
    }}
  >
    <div className="absolute inset-0 bg-white opacity-90"></div>
    <div className="absolute inset-0 flex flex-col justify-center items-center">
   
      <h1 className="lg:text-4xl md:text-2xl text-xl text-black font-bold my-8">I Grow By Helping People In Need</h1>

      <div className="lg:w-1/3">
        <div className="relative">
         <div className="flex bg-gray-200 rounded">
         <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-3  pr-4 rounded bg-gray-200 text-black placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-400"
          />
            <button className='btn rounded-0 btn-error text-white'>Search</button>
         </div>
        </div>
      </div>
    </div>
  </div>
);
};


export default Banner;

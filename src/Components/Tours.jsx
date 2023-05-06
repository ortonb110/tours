import { useState } from "react";

const Tours = ({ items, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const toggleReadMore = () => {
    setReadMore((prevState) => !prevState);
  };

  return (
    <article className="rounded-md w-[50rem] border-[1px] overflow-hidden">
      <img
        src={items.image}
        alt="Tourist attraction"
        className="w-full h-[33.1rem] object-cover"
      />
      <div className="px-[1.5rem] py-[2rem] text-center">
        <h2 className="font-bold capitalize mb-[1rem]">{items.name}</h2>
        <p className="text-gray-500 transition-all ease-in-out duration-300 mb-[1rem]">
          {readMore ? items.info : `${items.info.substring(0, 200)}...`}
          <button
            className="ml-[1rem] text-green-500 border-[1px] rounded-md px-[1rem] hover:text-white hover:bg-green-500 transition-all ease-in-out duration-300"
            onClick={toggleReadMore}
          >
            {readMore ? "Show less" : "Read more"}
          </button>
        </p>
        <button
          onClick={()=>{removeTour(items.id)}}
          className="w-full py-[0.2rem] text-green-500 border-[1px] border-green-500 hover:text-white hover:bg-green-500 transition-all ease-in-out duration-300 rounded-md"
        >
          Not interested
        </button>
      </div>
    </article>
  );
};

export default Tours;

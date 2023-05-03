const Tours = ({items}) => {
  return (
    <article className="rounded-md w-[36rem] border-[1px] overflow-hidden">
      <img src={items.image} alt="Tourist attraction" className="w-full " />
      <div className="px-[1.5rem] py-[2rem] text-center">
        <h2 className="font-bold capitalize ">{items.name}</h2>
        <p className="text-gray-500">{items.info}</p>
      <button className="w-full py-[0.2rem] text-green-500 border-[1px] border-green-500 hover:text-white hover:bg-green-500 transition-all ease-in-out duration-300 rounded-md">
        Not interested
      </button>
      </div>
    </article>
  );
};

export default Tours;

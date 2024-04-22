import React from "react";

const Cards = ({ item }) => {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-[100%] h-[100%] bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.Image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary dark:bg-blue-500 dark:border-blue-500">
                {item.category}
              </div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] dark:border-blue-500 dark:hover:bg-blue-500 hover:bg-pink-500 hover:text-white duration-200">
                View Now
              </div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] dark:border-blue-500 dark:hover:bg-blue-500 hover:bg-pink-500 hover:text-white duration-200">
                Download Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

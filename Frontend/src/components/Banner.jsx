import React from "react";
import Bannerbook from '../../public/images/Bannerbook.jpg'

export default function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col-reverse md:flex-row md:mt-10">
        <div className="md:w-1/2 md:mt-40 mt-10">
          <div className="space-y-10">
            <h1 className="md:text-4xl text-xl font-bold">
              Hello, Welcome To My BookStore <br />{" "}
              <span className="text-pink-500">Learn Something New!!</span>
            </h1>
            <p className="md:text-xl text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              accusamus cumque praesentium aspernatur vero architecto corporis,
              autem nam accusantium, voluptate quia doloribus enim facere error
              dolorum, fuga deserunt ipsa vitae!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>

            <button className="btn btn-secondary">Secondary</button>
          </div>
        </div>

        <div className="md:w-1/2 md:w-92 md:h-92">
          <img src={Bannerbook} alt="" />
        </div>
      </div>
    </>
  );
}

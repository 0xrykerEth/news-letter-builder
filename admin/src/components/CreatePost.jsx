import React from "react";
import { ImEye, ImSpinner11 } from "react-icons/im";

export default function CreatePost() {
  return (
    <form>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-700">Create New Post</h1>

        <div className="flex items-center space-x-5">
          <button className="flex items-center space-x-2 px-3 ring-1 ring-blue-500 h-10 rounded-xl text-blue-500 hover:text-white hover:bg-blue-500 transition">
            <ImSpinner11 />
            <span>Reset</span>
          </button>
          <button className="flex items-center space-x-2 px-3 ring-1 ring-blue-500 h-10 rounded-xl text-blue-500  hover:text-white hover:bg-blue-500 transition">
            <ImEye />
            <span>View</span>
          </button>
          <button className=" h-10 2-36 px-5  hover:ring-1  rounded-xl text-black  hover:text-blue-500 hover:bg-transparent ring-blue-500 transition">
            Post
          </button>
        </div>
      </div>
      <div>
        <input type="checkbox" />
      </div>
    </form>
  );
}

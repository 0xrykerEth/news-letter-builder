import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import UpdatePost from "./components/UpdatePost";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

function App() {
  const [closedNav, setClosedNav] = useState(false);

  const toggleNav = () => {
    setClosedNav(!closedNav);
  };

  const getNavWidth = () => (closedNav ? "w-16" : "w-56");
  return (
    <div className="flex">
      <div
        className={
          getNavWidth() + " min-h-screen  transition-width border border-r"
        }
      >
        <Navbar closed={closedNav} />
      </div>

      <div className="flex-1 min-h-screen ">
        <div className="sticky top-0">
          <div className="flex items-center p-2 space-x-2">
            <button onClick={toggleNav}>
              {closedNav ? (
                <AiOutlineMenuUnfold size={25} />
              ) : (
                <AiOutlineMenuFold size={25} />
              )}
            </button>
            <SearchForm />
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post/:slug" element={<UpdatePost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { getPosts, deletePosts } from "../api/post";
import PostCard from "./PostCard";
import { useSearch } from "../context/SearchProvider";

const pageNo = 0;
const POST_LIMIT = 9;
const getPaginationCount = (length) => {
  const devision = length / POST_LIMIT;
  if (devision % 1 !== 0) {
    return Math.floor(devision) + 1;
  }
  return devision;
};

export default function Home() {
  const { searchResult } = useSearch();
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState([]);

  const paginationCount = getPaginationCount(totalPosts);
  const paginationArr = new Array(paginationCount).fill(" ");

  const fetchPosts = async () => {
    const { error, posts, postCount } = await getPosts(pageNo, POST_LIMIT);

    if (error) return console.log(error);
    setPosts(posts);
    setTotalPosts(postCount);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async ({ id }) => {
    const confirmed = window.confirm("Are You sure!");
    if (!confirmed) return;

    const { error, message } = await deletePosts(id);

    if (error) return console.log(error);
    console.log(message);

    const newPosts = posts.filter((p) => p.id !== id);
    setPosts(newPosts);
  };

  return (
    <div>
      <div>
        <div className="grid grid-cols-3 gap pb-5">
          {searchResult.length
            ? searchResult.map((post) => {
                return (
                  <PostCard
                    key={post.id}
                    post={post}
                    onDeleteClick={() => handleDelete(post)}
                  />
                );
              })
            : posts.map((post) => {
                return (
                  <PostCard
                    key={post.id}
                    post={post}
                    onDeleteClick={() => handleDelete(post)}
                  />
                );
              })}
        </div>
      </div>

      {paginationArr.length > 1 && !searchResult.length ? (
        <div className="py-5 flex justify-center items-center">
          {paginationArr.map((_, index) => {
            return (
              <button
                key={index}
                className={
                  index === pageNo
                    ? "text-blue-500 border-b-2 border"
                    : "text-gray-500"
                }
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

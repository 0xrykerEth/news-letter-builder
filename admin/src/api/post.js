import axios from "axios";

export const getPosts = async (pageNo, limit) => {
  try {
    const { data } = await axios.get(
      `http://localhost:4848/api/post/posts?pageNo= ${pageNo} &limit= ${limit}`
    );
    console.log(data);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const deletePosts = async (postId) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:4848/api/post/${postId}`
    );
    console.log(data);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const searchPost = async (query) => {
  try {
    const { data } = await axios(
      `http://localhost:4848/api/post/search?title=${query}`
    );
    console.log(data);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

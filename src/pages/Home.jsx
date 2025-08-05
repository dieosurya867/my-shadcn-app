import { useState } from "react";

import Article from "../components/Article";
import Blog from "../components/Blog";
import postsData from "../posts.json";
import Search from "../components/Search";

function Home() {
  const [posts, setPosts] = useState(postsData);

  const onSearchChange = (value) => {
    console.log(value);
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} />
      {/* change yg awal nya memasang props menjadi destructuring */}
      {posts.map((props, index) => (
        // <Blog key={index} title={title} tags={tags} date={date} />
        //  {posts.map(({ title, tags, date }, index) => (
        <Blog {...props} key={index} />
      ))}
    </>
  );
}

export default Home;

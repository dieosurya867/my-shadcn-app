import { useState } from "react";

import Article from "../components/Article";
import Blog from "../components/Blog";
import postsData from "../posts.json";
import Search from "../components/Search";

function Home() {
  //mengambil data
  const [posts, setPosts] = useState(postsData);
  //initial value total data yg dicari 0
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value) => {
    console.log(value);
    // menfilter data dari postsdata
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    //pakai data yg sudah terfilter
    setPosts(filteredPosts);
    //hitung data yg dicari ada berapa yg sama
    setTotalPosts(filteredPosts.length);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
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

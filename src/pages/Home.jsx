import { useState } from "react";

import Article from "../components/Article";
import Blog from "../components/Blog";
import posts from "../posts.json";

function Home() {
  const [search, setSearch] = useState("");

  const changeSearch = (event) => {
    // console.log(event.target.value);
    setSearch(event.target.value);
  };
  return (
    <>
      <h1>Simple Blog</h1>
      <div>
        Cari Artikel : <input onChange={changeSearch} type="text" />
      </div>
      <small>Ditemukan 0 data dengan pencarian kata {search}</small>
      {/* change yg awal nya memasang props menjadi destructuring */}
      {posts.map(({ title, tags, date }, index) => (
        // <Blog key={index} title={title} tags={tags} date={date} />
        <Blog {...{ title, tags, date }} key={index} />
      ))}
    </>
  );
}

export default Home;

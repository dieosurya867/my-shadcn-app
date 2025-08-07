import { useState, useEffect } from "react";

import Article from "../components/Article";
import Blog from "../components/Blog";
import postsData from "../posts.json";
import Search from "../components/Search";

function Home() {
  //mengambil data
  const [posts, setPosts] = useState(postsData);
  //initial value total data yg dicari 0
  const [totalPosts, setTotalPosts] = useState(0);
  const [externalPosts, setExternalPosts] = useState([]);

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

  // dulu menggunakan 3 class lifecycle
  //artinya ketika compoenent ini di render
  //ComponentDidMount
  // ini ketika ada state yg berubah
  //ComponentDidUpdate
  // ketika component akan ditutup / dihancurkan
  //ComponentWillUnmount
  // dengan react hook bisa mencapai 3 lifecycle ini yaitu nama nya
  // useEffect buktinya apa silahkan cek di console log berikut akan muncul 2
  // console.log("render 2");

  useEffect(() => {
    console.log("ada posts baru");

    //menjalankan fetch data 1 kali ketika halaman ini dirender
    fetch("https://jsonplaceholder.typicode.com/posts")
      //setelah mengambil data fetching dibuat menjadi json
      .then((response) => response.json())
      //dan data json kita masukkan ke useState / mengupdate state externalPosts
      .then((json) => setExternalPosts(json));
    //masukkan state apa yg mau kita pantau
    const intervalId = setInterval(() => {
      console.log("Interval running");
    }, 1000);
    return () => {
      clearInterval(intervalId);
      removeEventListener;
      // ini adalah CompoenentWillUnmount
      console.log("Cleanup");
    };
    //dan ini adalah componentDidUpdate
  }, []);

  //gunakan Mutiple UseEffect agar tidak melakukan fetch data secara terus menerus
  // useEffect(() => {
  //   console.log("ada post baru");
  // }, [posts]);

  // useEffect(() => {
  //   console.log("render");
  // });

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
      <hr />
      {/* <h2>External Posts</h2> */}
      {/* kita tampilkan data externalPosts */}
      {/* {externalPosts.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))} */}
    </>
  );
}

export default Home;

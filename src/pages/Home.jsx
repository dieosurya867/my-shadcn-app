import Article from "../components/Article";
import Blog from "../components/Blog";
import posts from "../posts.json";

function Home() {
  return (
    <>
      <h1>Simple Blog</h1>
      {posts.map((blog, index) => (
        <Blog
          key={index}
          title={blog.title}
          tags={blog.tags}
          date={blog.date}
        />
      ))}
    </>
  );
}

export default Home;

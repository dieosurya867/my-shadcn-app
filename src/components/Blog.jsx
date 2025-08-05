// conditional rendering dengan component
const ArticleStatus = ({ isNew }) => {
  return isNew && <span>== Baru !!!</span>;
};

// pengecekan nilai conditional rendering diluar component
const NewArticle = () => {
  return <span>== Baru !!</span>;
};

function Blog(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date: {props.date} tags: {props.tags.join(", ")}{" "}
        {/* conditional rendering */}
        {/* {props.isNew ? "-- Baru !!" : "Postingan Lama"} */}
        {/* {props.isNew && "-- Baru !!"} */}
        {/* <ArticleStatus isNew={props.isNew} /> */}
        {props.isNew && <NewArticle />}
      </small>
    </>
  );
}

export default Blog;

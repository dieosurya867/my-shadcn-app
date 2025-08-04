function Article() {
  const name = "Nusantara";
  const title = ["Tutorial ReactJs", "Tutorial VueJs", "Tutorial NodeJs"];

  return (
    <>
      <div>{name}</div>
      <div>
        //jika mengembalikan return satu element maka bisa lansung mengunakan
        cara ini
        {title.map((title, index) => (
          <div key={index}>{title}</div>
        ))}
      </div>
      //tetapi jika mengembalikan mutiple element
      <div>
        {title.map((title) => (
          <>
            <div>{title}</div>
            <div>{title}</div>
          </>
        ))}
      </div>
    </>
  );
}

export default Article;

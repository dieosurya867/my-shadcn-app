import { useState, useEffect } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const changeSearchInput = (event) => {
    // console.log(event.target.value);
    setSearch(event.target.value);
    props.onSearchChange(event.target.value);
  };

  const changeSearchButton = () => {
    props.onSearchChange(search);
  };

  //   jika melakukan event keyboard = enter maka jalankan onSearchChange
  const searchKeydown = (e) => {
    if (e.key === "Enter") {
      changeSearchButton();
    }
  };

  const handleClick = () => {
    console.log("test");
  };

  useEffect(() => {
    // Pasang event listener saat mount
    window.addEventListener("keydown", searchKeydown);

    // Cleanup (componentWillUnmount)
    return () => {
      window.removeEventListener("keydown", searchKeydown);
      console.log("Cleanup: removed keydown listener");
    };
  }, [search]); // tergantung state yang digunakan di dalam event handler

  return (
    <>
      <div>
        Cari Artikel :{" "}
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchKeydown}
          type="text"
        />
        <button onClick={changeSearchButton}>Cari</button>
      </div>
      {/* dari hardcode saya buat dinamis */}
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata {search}
      </small>
    </>
  );
}

export default Search;

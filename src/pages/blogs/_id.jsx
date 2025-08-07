import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function SinglePost() {
  // gunakan loader agar tidak melihat delay nge load data atau kelihatan jeda di halaman
  const post = useLoaderData();

  return (
    <>
      <h2>{post?.title}</h2>
      <div>{post?.body}</div>
    </>
  );
}

export default SinglePost;

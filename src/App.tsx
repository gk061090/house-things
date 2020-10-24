import React, { useEffect, useState } from "react";
import { setQuery } from "./utils";

const pages = {
  main: "main",
  gallery: "gallery",
};

function App() {
  const [page, setPage] = useState("main");

  useEffect(() => {
    setQuery("page", page);
  }, [page]);

  return (
    <>
      <div>
        <button onClick={() => setPage(pages.main)}>go to main</button>
        <button onClick={() => setPage(pages.gallery)}>go to gallery</button>
      </div>
      <div>
        {page === pages.main && <p>Main</p>}
        {page === pages.gallery && <p>Galery</p>}
      </div>
    </>
  );
}

export default App;

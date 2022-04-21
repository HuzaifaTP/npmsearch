import React, { useEffect, useState } from "react";
import "./App.css";
import GridItems from "./components/gridItems/gridItems";
import SearchInput from "./components/searchInput/searchInput";
import { GridElement } from "./models";
import { API_fetchPackage } from "./api";

const App: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [gridElements, setGridElements] = useState<GridElement[]>([]);

  useEffect(() => {
    fetchGridElements()
  }, [searchInput]);

  const fetchGridElements = async () => {
    const res = await API_fetchPackage.get(`/search?text=${searchInput}`);
    setGridElements(res.data.objects)
    console.log(res.data.objects)
  };

  const onSearchHandler = (text: string) => {
    setSearchInput(text);
  };

  return (
    <>
      <GridItems items={gridElements} />
      <SearchInput onSearch={onSearchHandler} />
    </>
  );
};

export default App;

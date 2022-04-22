import React, { useEffect, useState } from "react";
import "./App.css";
import GridItems from "./components/gridItems";
import SearchInput from "./components/searchInput";
import { API_fetchPackage } from "./api";

export interface GridElements{ 
  items: any[]
  // author: string;
  // date: Date;
}

const App: React.FC = () => {

  const [searchInput, setSearchInput] = useState("");
  const [gridElements, setGridElements] = useState<GridElements[]>([]);

  useEffect(() => {
    fetchGridElements()
  }, [searchInput]);

  // Usually, data focused code will be separated from presentational (pure) component.
  // In this case, the code is too trivial, not to over-design.
  const fetchGridElements = async () => {
    const res = await API_fetchPackage.get(`/search?text=${searchInput}&size=250`);
    setGridElements(res.data.objects)
    console.log(res.data.objects)
  };

  const onSearchHandler = (text: string) => {
    setSearchInput(text);
  };

  return (
    <>
      <SearchInput onSearch={onSearchHandler} />
      <GridItems items={gridElements} />
    </>
  );
};

export default App;

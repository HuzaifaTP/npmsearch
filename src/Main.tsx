import React, { useEffect, useState } from "react";
import "./App.css";
import GridItems from "./components/gridItems";
import SearchInput from "./components/searchInput";
import { API_fetchPackage } from "./api";
import './Main.css'
export interface GridElements{ 
  items: any[]
  // author: string;
  // date: Date;
}

const Main: React.FC = () => {

  const [searchInput, setSearchInput] = useState("");
  const [optionInput, setOptionInput] = useState("50")
  const [gridElements, setGridElements] = useState<GridElements[]>([]);

  useEffect(() => {
    fetchGridElements()
  }, [searchInput,optionInput]);

  // Usually, data focused code will be separated from presentational (pure) component.
  // In this case, the code is too trivial, not to over-design.
  const fetchGridElements = async () => {
    const res = await API_fetchPackage.get(`/search?text=${searchInput}&size=${optionInput}`);
    setGridElements(res.data.objects)
    console.log(res.data.objects)
  };

  const onSearchHandler = (text: string) => {
    setSearchInput(text);
  };

  const onOptionChangeHandler = (text: string) =>{
    setOptionInput(text)
  }

  return (
    <div className="container">
      <SearchInput onSearch={onSearchHandler} onSelect={onOptionChangeHandler} optionInput= {optionInput}/>
      <GridItems items={gridElements} />
    </div>
  );
};

export default Main;

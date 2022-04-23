import React, { useEffect, useState } from "react";
import "./App.css";
import GridItems from "./components/gridItems";
import SearchInput from "./components/searchInput";
import { API_fetchPackage } from "./api";
import "./Main.css";

export interface GridElements {
  items: any[];
  loading: boolean;
}

const Main: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [optionInput, setOptionInput] = useState("50");
  const [gridElements, setGridElements] = useState<GridElements[]>([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetchGridElements();
  }, [searchInput, optionInput]);

  // Usually, data focused code will be separated from presentational (pure) component.
  // In this case, the code is too trivial and hence not separated. As code base grows
  // and more data needs to be managed, presentational and data management component will
  // be separated.

  const fetchGridElements = async () => {
    const res = await API_fetchPackage.get(
      `/search?text=${searchInput}&size=${optionInput}`
    );
    setGridElements(res.data.objects);
    setloading(false);
  };

  const onSearchHandler = (text: string) => {
    setSearchInput(text);
    setloading(true);
  };

  const onOptionChangeHandler = (text: string) => {
    setOptionInput(text);
    setloading(true);
  };

  return (
    <div className="container">
      <SearchInput
        onSearch={onSearchHandler}
        onSelect={onOptionChangeHandler}
        optionInput={optionInput}
      />
      <GridItems items={gridElements} loading={loading} />
    </div>
  );
};

export default Main;

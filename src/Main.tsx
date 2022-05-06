import React, { useEffect, useState } from "react";
import "./App.css";
import GridItems from "./components/gridItems";
import SearchInput from "./components/searchInput";
import { API_fetchPackage } from "./api";
import "./Main.css";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export interface GridElements {
  items: any[];
  loading: boolean;
}

const Main: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [optionInput, setOptionInput] = useState("50");
  const [gridElements, setGridElements] = useState<GridElements[]>([]);
  const [loading, setloading] = useState(false);
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    fetchGridElements();
    setloading(true);
    setClick(true);
  }, [searchInput, optionInput]);

  // Usually, data focused code will be separated from presentational (pure) component.
  // In this case, the code is too trivial and hence not separated. As code base grows
  // and more data needs to be managed, presentational and data management component will
  // be separated.

  const fetchGridElements = async () => {
    const res = await API_fetchPackage.get(
      `/search?text=${searchInput}&size=${optionInput}`
    );
    if (click === true && res.data.objects == "") {
      console.log("Triggered");
      setOpen(true);
      setGridElements([]);
    } else {
      setGridElements(res.data.objects);
    }
    setloading(false);
  };

  const onSearchHandler = (text: string) => {
    setSearchInput(text);
  };

  const onOptionChangeHandler = (text: string) => {
    setOptionInput(text);
  };

  return (
    <div className="container">
      <SearchInput
        onSearch={onSearchHandler}
        onSelect={onOptionChangeHandler}
        optionInput={optionInput}
      />
      <GridItems items={gridElements} loading={loading} />

      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"No results found"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Npm package with name "{searchInput}" does not exist.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            autoFocus
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Main;

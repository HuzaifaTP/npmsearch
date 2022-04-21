export interface GridItemsProps {
    items: { id: string; name: string }[];
  }

  export interface OnSearchProps {
    onSearch: (searchText:string) => void;
}

export interface GridElement{
    id:string;
    name: string;
    // author: string;
    // date: Date;
}
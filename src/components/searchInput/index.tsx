import React, {useRef} from "react";

export interface OnSearchProps {
    onSearch: (searchText:string) => void;
}

const SearchInput: React.FC<OnSearchProps> = props => {
const textInputRef = useRef<HTMLInputElement>(null);

const onSearchHandler = (event: React.FormEvent) =>{
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onSearch(enteredText)
}
return (
    <form onSubmit = {onSearchHandler}>
        <div>
            <label htmlFor="search-text">NPM REGISTRY SEARCH</label>
            <input type= "text" id = "search-text" ref ={textInputRef} ></input>
        </div>
        <button type="submit">Search</button>
    </form>
)
};


export default SearchInput;
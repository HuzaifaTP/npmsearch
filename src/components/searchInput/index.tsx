import React, { useRef } from "react";
import "./index.css";

export interface OnSearchProps {
  optionInput?: any;
  onSearch: (searchText: string) => void;
  onSelect: (optionText: string) => void;
}

const SearchInput: React.FC<OnSearchProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const onSearchHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onSearch(enteredText);
  };

  const onOptionChangeHandler = (event: React.ChangeEvent<any>) => {
    props.onSelect(event.target.value);
  };

  return (
    <form className="container-searchInput" onSubmit={onSearchHandler}>
      <h4 className="underline text-3xl font-normal leading-normal mt-0 mb-2 text-black-800">
        Npm Registry Search
      </h4>
      <div className="input-text">
        <div className="flex justify-center">
          <div className="search-input">
            <div className="mb-3 xl:w-96">
              <div className="input-group relative flex items-stretch space-x-2 w-full mb-6">
                <input
                  type="search"
                  ref={textInputRef}
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon3"
                />
                <button
                  className="bg-blue-200 btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  type="submit"
                  id="button-addon3"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="selector">
          <h1>Showing results:</h1>
          <div className="flex justify-center">
            <div className="mb-3 xl:w-50">
              <select
                value={props.optionInput}
                onChange={onOptionChangeHandler}
                className="form-select form-select-lg mb-3
      appearance-none
      block
      w-full
      px-3
      py-2
      text-xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label=".form-select-lg example"
              >
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="150">150</option>
                <option value="200">200</option>
                <option value="250">250</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchInput;

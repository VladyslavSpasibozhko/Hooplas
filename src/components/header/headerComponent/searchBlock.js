import React, { useState, createContext } from 'react';
import SearchForm from "./searchForm/searchForm";
import SearchSelect from "./searchSelect";

export const Context = createContext();

const SearchBlock = () => {
    const [ searchData, setSearchData ] = useState({
        inputValue:'',
        type:{
            text:'Movies',
            value:'movies'
        }
    });

    const onSubmit =(e)=> {
        e.preventDefault();
        console.log(searchData);
        setSearchData({
            ...searchData,
            inputValue: ''
        })
    };

    return (
        <Context.Provider value={{
            searchData,
            setSearchData,
            onSubmit
        }}>
            <div className='flex paddingY_10 flex50'>
                <SearchSelect/>
                <SearchForm/>
            </div>
        </Context.Provider>
    );
};

export default SearchBlock;
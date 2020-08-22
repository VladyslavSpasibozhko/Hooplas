import React, { useContext } from 'react';
import Button from "../../../../elements/button";
import Input from "../../../../elements/input";
import { Context } from "../searchBlock";
import './searchForm.css'

const SearchForm = () => {
    const { setSearchData,
            searchData,
            onSubmit } = useContext(Context);

    const setInputValue =(e)=> {
        setSearchData({
            ...searchData,
            inputValue:e.target.value
        });
    };


    return (
        <form
            className='search-form'
            onSubmit={onSubmit}>
            <Input
                className='search-input'
                type="text"
                value={searchData.inputValue}
                onChange={setInputValue}
            />
            <Button
                type='submit'
                text=''
                className='fa search-button'
            />
        </form>
    );
};

export default SearchForm;
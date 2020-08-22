import React, { useState, useContext } from 'react';
import { Context } from "./searchBlock";
import SelectItem from "../../../elements/selectItem";
import '../../select/select.css'

const data = [
    {
        text:'Movies',
        value:'movies'
    },
    {
        text:'People',
        value:'people'
    },
    {
        text:'Companies',
        value:'companies'
    },
    {
        text:'TV shows',
        value:'tv_shows'
    },
];

const SearchSelect = () => {
    const { searchData ,setSearchData } = useContext(Context);
    const [open, setOpen] = useState(false);

    const handler =(item)=> {
        setSearchData({
            ...searchData,
            type:item
        });
        setOpen(!open);
    };

    return (
        <div className='select-container'>
            <div
                className={open ? 'select-title open' : 'select-title'}
                onClick={()=> setOpen(!open)}
            >
                {searchData.type.text}
            </div>
            <ul className='select-items-container'>
                {
                    data.map((item, index) =>
                        (
                            <SelectItem
                                key={index}
                                {...{item}}
                                {...{handler}}
                                value={searchData.type.value}
                            />
                        )
                    )
                }
            </ul>
        </div>
    );
};


export default SearchSelect;
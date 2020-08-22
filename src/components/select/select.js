import React, { useState } from 'react';
import SelectItems from "../../elements/selectItem";
import './select.css'

const Select = ({ data }) => {
    const [open, setOpen ] = useState(false);

    const [title, setValue] = useState({
        text:'Default',
        value:'default'
    });

    const showItems =()=> setOpen(!open);

    const handler =(item)=> {
        setValue(item);
        setOpen(!open)
    };

    return (
        <div className='select-container'>
            <div
                onClick={showItems}
                className={open ? 'select-sort-title open' : ' select-sort-title'}
            >
                {title.text}
            </div>
            <ul className='select-items-container'>
                {
                    data.map((item, index) =>
                        (
                            <SelectItems
                                key={index}
                                {...{item}}
                                {...{handler}}
                                value={title.value}
                            />
                        )
                    )
                }
            </ul>
        </div>
    );
};


export default Select;
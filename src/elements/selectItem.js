import React from 'react';

const SelectItem = ({ item, handler, value }) => {
    return (
        <li
            className={
                value === item.value
                    ? 'select-item active'
                    : 'select-item'}
            onClick={() => handler(item)}
        >{item.text}</li>
    );
};

export default SelectItem;
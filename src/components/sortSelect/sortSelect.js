import React from 'react';
import Select from "../select/select";

const selectData = [
    {
        text:'Default',
        value:'default'
    },
    {
        text:'A-Z',
        value:'az'
    },
    {
        text:'Z-A',
        value:'za'
    },
    {
        text:'User rating',
        value:'user_rating'
    },
];

const SortSelect = () => {
    return (
        <div className='flex align-center'>
            <span style={{marginRight:'5px'}}>Sort by:</span>
            <Select
                data={selectData}
                className='select-sort-title'
            />
        </div>
    );
};

export default SortSelect;
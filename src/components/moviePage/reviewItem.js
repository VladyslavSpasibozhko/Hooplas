import React from 'react';

const ReviewItem = ({ item }) => {
    return (
        <div className='flex user-review-container'>
            <div className='user-photo flex align-center justify-middle'>
                <div className='user-icon'></div>
            </div>
            <div className='user-review'>
                <div className='user-review-name'>{item.author}</div>
                <div className='user-review-text'>{item.content}</div>
            </div>
        </div>
    );
};

export default ReviewItem;
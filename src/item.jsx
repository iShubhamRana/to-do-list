import React from 'react';
const Item = ( props )=>{
    
    return (
        <div className='item' >
            <button className='btn2' onClick={  ()=>{props.onSelect(props.id) } } >&times;</button>
            <p>{props.listItem}</p>
        </div>
    );
}

export default Item;
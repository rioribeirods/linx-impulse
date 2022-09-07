import React from 'react';

const Button = ({style, content, onClick}) => {
    return (
        <button className={style} onClick={onClick}>{content}</button>
    )
}

export default Button
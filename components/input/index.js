"use client";
import React, { useState } from 'react'
import style from './page.module.css'
import Button from '../button';

const Input = ({children}) => {
    let [text, setText] = useState();
    console.log('input');
    return (
        <>
            <input type="text" className={style.userInput} onChange={(e) => {
                setText(e.target.value);
            }} placeholder='id' />
            {children}
            <Button id={Number(text)} />
        </>
    )
}

export default Input
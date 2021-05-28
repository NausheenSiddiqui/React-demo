import React, { useState } from 'react';

const Range = () => {
    const initializeState = {
        str1: "",
        str2: ""
    }
    const [state, setStr] = useState(initializeState);
    const { str1, str2 } = state;

     let arr1 = [], arr2 = [], newStr1 = "", newStr2 = "";

    const handleChange = e => {
        const { name, value } = e.target;
        setStr(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const printRandom = () => {
        arr1 = str1.split("").sort();
        newStr1 = arr1.join("").trim().toLowerCase();
        console.log(newStr1)
        arr2 = str2.split("").sort();
        newStr2 = arr2.join("").trim().toLowerCase();
        console.log(newStr2)
        if (newStr1.trim() === newStr2.trim()) {
            console.log("Strings are anagram")
        }
        else {
            console.log("Strings are not anagram")
        }
    }

    return (

        <>
            <input type="text" name="str1" onChange={handleChange} />
            <input type="text" name="str2" onChange={handleChange} />
            <button type="button" onClick={printRandom}>get output</button>
        </>
    )


}

export default Range
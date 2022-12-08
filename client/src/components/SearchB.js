import React, {useContext, useState} from 'react'
import {GlobalStoreContext} from  '../store'


export default function SearchB(props) {

    const [searchInput, setSearchInput] = useState("");
    const { store } = useContext(GlobalStoreContext);
    const { filter } = props

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        filter(searchInput);
    };

    return (

    <input
    type="search"
    placeholder="Search here"
    onChange={handleChange}
    value={searchInput} />
    )
};
import React from 'react';
import './TodoSearch.css';
import { useState } from 'react';

const TodoSearch = ({
    searchValue,
    setSearchValue,
		setdefaultTodos,
		defaultTodos
}) => {

    console.log('lo que hay en el searchVlaueSS',searchValue);
    return (
        <input
        value={searchValue}
        onInput={event => setSearchValue(event.target.value)} 
        placeholder="Cebolla" />
    )
}

const busqueda = (searchValue, defaultTodos, setdefaultTodos) => {



	// jojoj|Ao
	// dasd
	//
		//
		// das
	//
		//
		//
		//
		//
		//
		//
		//
		// dasd
}

export {
    TodoSearch
}

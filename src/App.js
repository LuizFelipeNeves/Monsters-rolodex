import React, { useState, useEffect } from 'react'
import SearchBox from './Components/search-box'
import CardList from './Components/card-list'
import './App.css'

const App = () => {
	const [monsters, setmonsters] = useState([])
	const [searchField, setSearchField] = useState('')

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((response) => setmonsters(response))
	}, [])

	const onSearchChange = ({target}) => setSearchField(target.value)

	const filteredMonsters = monsters.filter(monster =>
		monster.name.toLowerCase().includes(searchField.toLowerCase())
	);

	return (
		<div className="App">
			<h1>Monsters Rolodex</h1>
			<SearchBox onSearchChange={onSearchChange} />
			<CardList monsters={filteredMonsters} />
		</div>
	)
}

export default App

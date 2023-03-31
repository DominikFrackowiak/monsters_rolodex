import { useState, useEffect } from 'react'

import './App.css'

import CardList from './components/card-list/CardList'
import Searchbox from './components/search-box/Searchbox'

function App() {
	const [users, setUsers] = useState(null)
	const [filteredUsers, setFilteredUsers] = useState([])

	useEffect(() => {
		const fetchUsers = async () => {
			const res = await fetch('https://jsonplaceholder.typicode.com/users')
			const data = await res.json()
			setUsers(data)
		}
		fetchUsers()
	}, [])

	const handleFiltering = e => {
		let filteredUsers = []

		if (e.target.value.length > 0) {
			filteredUsers = users.filter(user =>
				user.name.toLowerCase().includes(e.target.value.toLowerCase())
			)
		}

		setFilteredUsers(filteredUsers)
	}

	return (
		<div className='App'>
			<h1 className='app-title'>Monsters Rolodex</h1>
			<Searchbox
				classes={'search-box'}
				placeholder={'search monsters...'}
				inputChanges={handleFiltering}
			/>
			<div className='card-list'>
				{!users && <p>error</p>}
				{!filteredUsers.length &&
					users &&
					users.map(user => <CardList key={user.id} user={user} />)}
				{filteredUsers.length > 0 &&
					filteredUsers.map(user => <CardList key={user.id} user={user} />)}
			</div>
		</div>
	)
}

export default App

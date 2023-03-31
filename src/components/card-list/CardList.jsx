import './CardList.css'

export default function CardList({ user }) {
	return (
		<div className='card-container'>
			<img
				src={`https://robohash.org/${user.id}set=set2&size=100x100`}
				alt='monster'
			/>
			<h2>{user.name}</h2>
			<p>{user.email}</p>
		</div>
	)
}

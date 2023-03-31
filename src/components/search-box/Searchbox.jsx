import './Searchbox.css'

export default function Searchbox({ classes, placeholder, inputChanges }) {
	return (
		<input
			className={classes}
			type='search'
			placeholder={placeholder}
			onChange={e=>inputChanges(e)}
		/>
	)
}

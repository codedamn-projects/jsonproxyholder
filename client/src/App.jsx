import React, { useEffect, useState } from 'react'

function App() {
	const [value, setValue] = useState('/posts')
	const [data, setData] = useState('')

	useEffect(() => {
		const API_URL = `https://${window.location.hostname}:1338/${value}`
		fetch(API_URL)
			.then((t) => t.text())
			.then((data) => {
				setData(data)
			})
	}, [value])

	return (
		<div>
			<h1>Hello World!</h1>
			<input
				type="text"
				placeholder="write the relative URL here to get data"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<pre>{data}</pre>
		</div>
	)
}

export default App

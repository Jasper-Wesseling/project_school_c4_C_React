import { useState, useEffect } from 'react'
import Add from './components/Add'
import './css/App.scss'


function App() {
	const [count, setCount] = useState(0)
	useEffect(() => {
		fetch('http://localhost:80/dashboard/simple%20api/test.php', {method: 'GET'})
		.then(response => response.json())
		.then(data => {
			console.log(data.id)
		})
	}, [ ])
	
	return (
		<div className='test'>
			<p>test</p>
			<Add></Add>
		</div>
	)
}
	
export default App
	
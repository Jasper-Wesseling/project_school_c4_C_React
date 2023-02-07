import { useState, useEffect } from 'react'
import Add from './components/Add'
import Table from './components/Table'
import './css/App.scss'


function App() {
	const [bedrijf_info, setBedrijf_info] = useState([])

	// fetch from the API
	useEffect(() => {
		fetch('http://localhost:80/dashboard/simple%20api/test.php', {method: 'GET'})
		.then(response => response.json())
		.then(data => {
			setBedrijf_info(data.bedrijf_info)
		})
	}, [ ])
	
	return (
		<div>
			<Add></Add>
			<Table bedrijf_info={bedrijf_info} setBedrijf_info={setBedrijf_info} ></Table>
		</div>
	)
}
	
export default App
	
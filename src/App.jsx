import { useState, useEffect } from 'react'
import Add from './components/Add'
import Table from './components/Table' 


function App() {
	/*///////////////////////////
	/////this is the API url/////
	///////////////////////////*/
	const API_url = 'http://localhost:80/dashboard/simple%20api/test.php'
	const [bedrijf_info, setBedrijf_info] = useState([])

	// fetch from the API
	useEffect(() => {
		fetch(API_url, {method: 'GET'})
		.then(response => response.json())
		.then(data => {
			setBedrijf_info(data.bedrijf_info)
		})
	}, [ ])

	const refresh = () => { 
		fetch(API_url, {method: 'GET'})
		.then(response => response.json())
		.then(data => {
			setBedrijf_info(data.bedrijf_info)
		}) 
	}
	
	return (
		<div>
			<Add refresh={refresh} API_url={API_url} ></Add>
			<Table bedrijf_info={bedrijf_info} setBedrijf_info={setBedrijf_info} refresh={refresh} API_url={API_url} ></Table>
		</div>
	)
}
	
export default App
	
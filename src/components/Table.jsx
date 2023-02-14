import React, { useState } from 'react'
import '../css/Table.scss'

const Table = ({bedrijf_info, setBedrijf_info, refresh, API_url}) => {
	const [sortButton, setSortButton] = useState(false)
	const [editButton, setEditButton] = useState(0)

	const clickEditButton = (id) => {
		if (id === editButton) {
			setEditButton(-0)
		} else {
			setEditButton(id)
		}
	}

	const editDone = (id) => {
		if (document.getElementById("inputTelnr").value && document.getElementById("inputadres").value && document.getElementById("inputbedrijfsnaam").value && document.getElementById("inputwoonplaats").value) {
			fetch(API_url, {
			method: 'PUT',
			body: JSON.stringify({
				Telnr:document.getElementById("inputTelnr").value,
				adres:document.getElementById("inputadres").value,
				bedrijfsnaam:document.getElementById("inputbedrijfsnaam").value,
				woonplaats:document.getElementById("inputwoonplaats").value,
				id:id
			})}).then(refresh)
			clickEditButton(id)
		} else {
			alert('Edit field not fild in correctly')
		}
	}

	const Delete = (id) => {
		fetch(API_url, {
			method: 'DELETE',
			body: JSON.stringify({
				id:id
			})}).then(refresh)
	}

	// sort for numbers
	const sortNum = (soortnaam) => { 
		if (sortButton) {
			const numAscending = [...bedrijf_info].sort((a, b) => a[soortnaam] - b[soortnaam]);
			setBedrijf_info(numAscending)
			setSortButton(!sortButton)
		} else {
			const numDescending = [...bedrijf_info].sort((a, b) => b[soortnaam] - a[soortnaam]);
			setBedrijf_info(numDescending)
			setSortButton(!sortButton)
		}	
	}

	// sort for the strings
	const sortStr = (soortnaam) => {
		if (sortButton) {
			const strAscending = [...bedrijf_info].sort((a, b) => a[soortnaam] > b[soortnaam] ? 1 : -1, ); 
			setBedrijf_info(strAscending)
			setSortButton(!sortButton)
		} else {
			const strDescending = [...bedrijf_info].sort((a, b) => a[soortnaam] > b[soortnaam] ? -1 : 1, );
			setBedrijf_info(strDescending)
			setSortButton(!sortButton)
		}	
	}

	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th> 
							<button type="button" className='table-button__nostyle' onClick={() => sortNum('ID')} >ID</button>
						</th>
						<th> 
							<button type="button" className='table-button__nostyle' onClick={() => sortNum('Telnr')} >Telnr</button>
						</th>
						<th> 
							<button type="button" className='table-button__nostyle' onClick={() => sortStr('adres')} >adres</button>
						</th>
						<th> 
							<button type="button" className='table-button__nostyle' onClick={() => sortStr('bedrijfsnaam')} >bedrijfsnaam</button>
						</th>
						<th> 
							<button type="button" className='table-button__nostyle' onClick={() => sortStr('woonplaats')} >woonplaats</button>
						</th>
						<th> 
							Delete
						</th>
						<th> 
							Edit
						</th>
					</tr>
					{ bedrijf_info.map((item, i) => (
						<>
							<tr key={i}>
								<td title={item.DateAdded} >{item.ID}</td>
								<td title={item.DateAdded} >{item.Telnr}</td>	
								<td title={item.DateAdded} >{item.adres}</td>
								<td title={item.DateAdded} >{item.bedrijfsnaam}</td>
								<td title={item.DateAdded} >{item.woonplaats}</td>
								<td> 
									<button type="button" onClick={() => Delete(item.ID)} >Delete</button>	
								</td> 
								<td> 
									<button type="button" onClick={() => clickEditButton(item.ID)} >Edit</button>	
								</td>  
							</tr> 
							{editButton === item.ID && 
								<tr key={i + "test"}>
									<td>Edit {item.ID}</td> 
									<td>
										<input type="number" id="inputTelnr"></input>	
									</td> 
									<td>
										<input type="text" id="inputadres"></input>	
									</td> 
									<td>
										<input type="text" id="inputbedrijfsnaam"></input>	
									</td> 
									<td>
										<input type="text" id="inputwoonplaats"></input>	
									</td> 
									<td></td> 
									<td> 
										<button type="button" onClick={() => editDone(item.ID)} >Done</button>	
									</td> 
								</tr>
							}
						</>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Table

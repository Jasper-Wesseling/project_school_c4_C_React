import React, { useState } from 'react'
import '../css/Table.scss'

const Table = ({bedrijf_info, setBedrijf_info}) => {
	
	const [knop, setKnop] = useState(false)

	// sort for numbers
	const sortNum = (soortnaam) => { 
		if (knop) {
			const numAscending = [...bedrijf_info].sort((a, b) => a[soortnaam] - b[soortnaam])
			setBedrijf_info(numAscending)
			setKnop(!knop)
		} else {
			const numDescending = [...bedrijf_info].sort((a, b) => b[soortnaam] - a[soortnaam]);
			setBedrijf_info(numDescending)
			setKnop(!knop)
		}	
	}

	// sort for the strings
	const sortStr = (soortnaam) => {
		if (knop) {
			const strAscending = [...bedrijf_info].sort((a, b) => a[soortnaam] > b[soortnaam] ? 1 : -1, ); 
			setBedrijf_info(strAscending)
			setKnop(!knop)
		} else {
			const strDescending = [...bedrijf_info].sort((a, b) => a[soortnaam] > b[soortnaam] ? -1 : 1, );
			setBedrijf_info(strDescending)
			setKnop(!knop)
		}	
	}

	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th> 
							<button type="button" onClick={() => sortStr('ID')} >ID</button>
						</th>
						<th> 
							<button type="button" onClick={() => sortNum('Telnr')} >Telnr</button>
						</th>
						<th> 
							<button type="button" onClick={() => sortStr('adres')} >adres</button>
						</th>
						<th> 
							<button type="button" onClick={() => sortStr('bedrijfsnaam')} >bedrijfsnaam</button>
						</th>
						<th> 
							<button type="button" onClick={() => sortStr('woonplaats')} >woonplaats</button>
						</th>
					</tr>
					{ bedrijf_info.map((item, i) => (
						<tr key={i}>
							<td title={item.DateAdded} >{item.ID}</td>
							<td title={item.DateAdded} >{item.Telnr}</td>	
							<td title={item.DateAdded} >{item.adres}</td>
							<td title={item.DateAdded} >{item.bedrijfsnaam}</td>
							<td title={item.DateAdded} >{item.woonplaats}</td> 
						</tr> 
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Table

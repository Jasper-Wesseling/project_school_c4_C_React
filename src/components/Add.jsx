import React from 'react'
import { useForm } from 'react-hook-form'

function Add({refresh}) {
	const {register, handleSubmit} = useForm();
	const onSubmit = (data) => {
		if(data.bedrijfsnaam && data.adres && data.woonplaats && data.Telnr) {
			fetch('http://localhost:80/dashboard/simple%20api/test.php', {
				method: 'POST',
				body: JSON.stringify({
					bedrijfsnaam:data.bedrijfsnaam,
					adres:data.adres,
					woonplaats:data.woonplaats,
					Telnr:data.Telnr
				})}).then(refresh)
		} else {
			alert('Add field not fild in correctly')
		}
	}
	
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>
				bedrijfsnaam:
				<input  {...register("bedrijfsnaam")} />
			</label>
			<label>
				adres:
				<input {...register("adres")} />
			</label>
			<label>
				woonplaats:
				<input {...register("woonplaats")} />
			</label>
			<label>
				Telnr:
				<input type="number" {...register("Telnr")} />
			</label>
			<input type="submit" value="add" />
		</form>
	)
}

export default Add
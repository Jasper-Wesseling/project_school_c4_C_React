import React from 'react'
import { useForm } from 'react-hook-form'

function Add() {
	const {register, handleSubmit} = useForm();
	const onSubmit = (data) => {
		fetch('http://localhost:80/dashboard/simple%20api/test.php', {
			method: 'POST',
			body: JSON.stringify({
				naam:data.naam,
				inhoud:data.inhoud
			})})
		.then(response => response.json())
		
		// console.log({ id:-1, naam:data.naam, inhoud:data.inhoud })
		console.log(JSON.stringify({
			naam:data.naam,
			inhoud:data.inhoud
		}))
	}
	
	return (
		<form className='w-1/3' onSubmit={handleSubmit(onSubmit)}>
			<label className='block mb-2 text-custom-four text-3xl font-russo'>
				Name:
				<input  {...register("naam")} />
			</label>
			<label className='block mb-2 text-custom-four text-3xl font-russo'>
				Task:
				<input {...register("inhoud")} rows="4" />
			</label>
			<input type="submit" value="add" />
		</form>
	)
}

export default Add
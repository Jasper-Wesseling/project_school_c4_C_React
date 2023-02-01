import { useState } from 'react'
import Add from './components/Add'
import './css/App.scss'


function App() {
	const [count, setCount] = useState(0)
	
	return (
		<div className='test'>
			<p>test</p>
			<Add></Add>
		</div>
	)
}
	
export default App
	
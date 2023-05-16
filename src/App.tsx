import './assets/scss/App.scss'

const App = () => {


	return (
		<div className='App container'>
			<form id='login-form' className='mt-5'>
				<label htmlFor="email">Email</label>
				<input type="text" id='email' />

				<label htmlFor="password">Password</label>
				<input type="text" id='password' />

				<button className='btn btn-success' type='submit'>Log in</button>
			</form>
		</div>
	)
}

export default App

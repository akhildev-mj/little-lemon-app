import './LoginPage.css';

function LoginPage() {
	return (
		<main className='login-page'>
			<h1>Login</h1>
			<div className='login-container'>
				<div className='login-box'>
					<form>
						<div className='input-group'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								id='email'
								placeholder='Enter your email'
								required
							/>
						</div>
						<div className='input-group'>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								id='password'
								placeholder='Enter your password'
								required
							/>
						</div>
						<div className='actions'>
							<button type='submit' className='btn-primary'>
								Login
							</button>
							<a href='/forgot-password' className='forgot-password'>
								Forgot Password?
							</a>
						</div>
					</form>
					<p className='signup-link'>
						Don't have an account? <a href='/signup'>Sign up</a>
					</p>
				</div>
			</div>
		</main>
	);
}

export default LoginPage;

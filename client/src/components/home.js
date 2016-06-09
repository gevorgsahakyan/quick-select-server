import {
	React, 
	Component, 
	Link, 
	reduxForm 
} from '../modules';

class Home extends Component {
	handleFormSubmit({ email, password }) {
		console.log(email, password);
	}

	render() {
		const { handleSubmit, fields: { email, password } } = this.props;

		return (
			<div>
			  <h2>Please sign in</h2>
		      <form className="form-signin" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
		        <label for="inputEmail" className="sr-only">Email address</label>
		        <input { ...email }
		        	   type="email" 
	        		   id="inputEmail" 
	        		   className="form-control" 
	        		   placeholder="Email address" 
	        		   required autofocus />
		        <label for="inputPassword" className="sr-only">Password</label>
		        <input { ...password }
		        	   type="password" 
    				   id="inputPassword" 
    				   className="form-control" 
    				   placeholder="Password" 
    				   required />
		        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
		      </form>
			  <h4>Do not have an account yet? Sign up right now:</h4>
			  <Link className="btn" to={'/signup'}>Sign up</Link>
		    </div>
		);
	}
}

export default reduxForm({
	form: 'signup',
	fields: ['email', 'password']
})(Home);
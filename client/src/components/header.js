import { React, Component, Link } from '../modules';

class Header extends Component {
	render() {
		return (
	      <div className="header clearfix">
	        <nav>
	          <ul className="nav nav-pills pull-right">
				<Link className="link" to={'/'} activeClassName="active">
	            	<li role="presentation" className="active">
	            		Home
	            	</li>
	            </Link>

            	<Link className="link" to={'/signup'} activeClassName="active">
		            <li role="presentation">
            			Signup
		            </li>
		        </Link>
	          </ul>
	        </nav>
	        <h3 className="text-muted">Nuanced IT</h3>
	      </div>
		);
	}
}

export default Header;
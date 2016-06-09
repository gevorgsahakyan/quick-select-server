import { React, Component, Link } from '../modules';
import Header from './header';
import Home from './home';

export default class App extends Component {
  render() {
    let { children } = this.props;

    return (
    	<div>
    		<Header />
    		<div className="jumbotron">
          {children}
        </div>
    	</div>
    );
  }
}
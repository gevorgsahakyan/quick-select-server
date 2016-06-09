import { React, Component, Router, Route, browserHistory } from './modules';

import {
	App, 
	Signin,
	Home
} from './components';

export default class Routes extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route component={App}>
					<Route path="/" component={Home} />
					<Route path="signin" component={Signin} />
				</Route>
			</Router>
		);
	}
}
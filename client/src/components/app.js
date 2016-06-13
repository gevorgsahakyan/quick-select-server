import { React, Component } from '../modules';
import Header from './header';

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

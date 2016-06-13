import {
	React,
	Component,
	PropTypes,
	Link,
	AppBar,
	RaisedButton,
	getMuiTheme,
	baseTheme
} from '../modules';

class Header extends Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    const styles = {
      title: {
        cursor: 'pointer',
        color: 'white',
        textDecoration: 'none'
      },

      raisedButton: {
        marginTop: '5px',

        label: {
          color: 'white'
        }
      }
    };

    return (
      <AppBar
        title={<Link to={"/"} style={styles.title}>Quick Select</Link>}
        showMenuIconButton={false}
        iconElementRight={<RaisedButton
          primary
          label="Sign up"
          style={styles.raisedButton}
          labelStyle={styles.raisedButton.label}
          linkButton
          href="/signup"
        />}
      />
    );
  }
}

Header.childContextTypes = {
  muiTheme: PropTypes.object.isRequired
};

export default Header;

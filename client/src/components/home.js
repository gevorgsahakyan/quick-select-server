import {
	React,
	Component,
	PropTypes,
	reduxForm,
	RaisedButton,
	Paper,
	Divider,
	TextField,
	getMuiTheme,
	baseTheme,
	FlatButton
} from '../modules';

class Home extends Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  handleFormSubmit({ email, password }) {
    console.log(email, password);
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    const styles = {
      fields: {
        marginLeft: 20
      },

      submitBtn: {
        marginTop: 22
      }
    };

    return (
      <div>
        <h2>Please sign in</h2>
        <form
          className="form-signin"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >
          <Paper zDepth={2}>
            <TextField
              hintText="Email address" {...email}
              style={styles.fields}
              underlineShow={false}
            />
            <Divider />
            <TextField
              hintText="Password" {...password}
              style={styles.fields}
              type="password"
              underlineShow={false}
            />
            <Divider />
          </Paper>
          <RaisedButton
            primary
            label="Sign in"
            style={styles.submitBtn}
            type="submit"
          />
        </form>
        <h4>Do not have an account yet? Sign up right now:</h4>
        <FlatButton
          label="Sign up"
          linkButton
          href="/signup"
          primary
        />
      </div>
    );
  }
}

Home.childContextTypes = {
  muiTheme: PropTypes.object.isRequired
};

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password']
})(Home);

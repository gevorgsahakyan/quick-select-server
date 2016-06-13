import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reduxForm, reducer } from 'redux-form';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { lightBaseTheme as baseTheme } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

export {
	React, ReactDOM, PropTypes, Component,
	Router, Route, Link,
	browserHistory, Provider, createStore, applyMiddleware,
	combineReducers, reduxForm, reducer, AppBar, baseTheme,
	injectTapEventPlugin, IconButton, NavigationClose,
	getMuiTheme, FlatButton, RaisedButton,
	Divider, Paper, TextField
};

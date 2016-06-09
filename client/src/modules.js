import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reduxForm, reducer } from 'redux-form';
import { Router, Route, Link, browserHistory } from 'react-router';

export {
 	React, 
	ReactDOM, 
	Component,
	Router,
	Route,
	Link,
	browserHistory,
	Provider, 
	createStore, 
	applyMiddleware, 
	combineReducers,
	reduxForm,
	reducer
}; 
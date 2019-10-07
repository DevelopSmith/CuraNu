import React from 'react'
import { Router, Switch, Route } from "react-router-dom";
import { render } from 'react-dom'
import { Provider } from "react-redux";
import { I18nextProvider } from 'react-i18next';

import store from './store';
import i18n from './i18n';
import browserHistory from './helpers/history';

import Main from './Main'
import Events from './pages/Events'
import News from './pages/News'
import Blog from './pages/Blog'
import QualityManual from './pages/QualityManual'
import Groups from './pages/Groups'
import Header from './components/Header'
import { Nothing } from './pages/Nothing';

window.React = React
const parent = document.getElementById('main');

class App extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<div style={{height: '100%'}}>
					<Header />

					<Switch>
						<Route exact path="/">
							<Main />
						</Route>
						<Route path="/events">
							<Events />
						</Route>
						<Route path="/news">
							<News />
						</Route>
						<Route path="/blog">
							<Blog />
						</Route>
						<Route path="/quality-manual">
							<QualityManual />
						</Route>
						<Route path="/groups">
							<Groups />
						</Route>

						<Route>
							<Nothing />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

if(!!parent){
	render(<I18nextProvider i18n={i18n}>
		<Provider store={store}>
			<App />
		</Provider>
	</I18nextProvider>, parent);
}
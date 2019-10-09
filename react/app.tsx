import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from "react-redux"
import { I18nextProvider } from 'react-i18next'
import Popup from 'react-popup';
import 'react-popup/style.css';

import store from './store.ts'
import i18n from './i18n/index.ts'
import browserHistory from './helpers/history.ts'

import Home from './pages/Home.tsx'
import Events from './pages/Events.tsx'
import News from './pages/News.tsx'
import Blog from './pages/Blog.tsx'
import QualityManual from './pages/QualityManual.tsx'
import Groups from './pages/Groups.tsx'
import Header from './components/Header.tsx'
import { Nothing } from './pages/Nothing.tsx'

const parent = document.getElementById('main');

class App extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<div style={{height: '100%'}}>
					<Popup />
					<Header />

					<Switch>
						<Route exact path="/">
							<Home />
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
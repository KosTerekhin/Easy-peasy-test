import React from 'react';
import { StoreProvider } from 'easy-peasy';
import store from './store/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Anotherpage } from './components/anotherpage/';

export function App() {
	return (
		<Router>
			<Switch>
				<StoreProvider store={store}>
					<Route path="/" component={Anotherpage} />
				</StoreProvider>
			</Switch>
		</Router>
	);
}

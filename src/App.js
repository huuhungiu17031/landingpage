import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './Page/HomePage/HomePage';
import ProjectDetail from './component/ProjectDetail/ProjectDetail';


function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route path='/' exact={true} component={HomePage}/>
					<Route path='/ProjectDetail' exact={false} component={ProjectDetail}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;

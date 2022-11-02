import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import './styles/index.scss';
import { ThemeProvider } from './provider/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from './store/store';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
	<Provider store={store}>
		<Router>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</Router>
	</Provider>
);

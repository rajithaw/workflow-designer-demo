import React from 'react';
import  configureStore from '../store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainPage } from './common/MainPage';

const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <MainPage />
                </Router>
            </Provider>
        );
    }
}

export default App;
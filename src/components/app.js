import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import ImageContainer from '../containers/image-container';

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <ImageContainer />
            </div>
        </Provider>
    );
}

export default App;

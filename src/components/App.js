import React from 'react';
import ReactDOM from 'react-dom';

// TODO: Remember to attribute sound effects:
// "Sound effects obtained from https://www.zapsplat.com"

// components
import DrumMachine from './DrumMachine';

const App = () => {
    return (<DrumMachine />);
}

ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';

describe ('<List />', () => {
    it('renders without crashing', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<List key='5'
            header='First list'
            cards={['b', 'c', 'd', 'f', 'h', 'i', 'k']}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})
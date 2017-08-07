import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

describe('<App />', () => {
    test('it renders <App /> component', ()=> {
        const component = mount(<App />);
        expect(component).toHaveLength(1)
    })
    
    test('it increments counter on button click', () => {
        const component = mount(<App />);
        component.find(".btn-increment").simulate('click');
        expect(component.state('score')).toEqual(1);

        component.find(".btn-decrement").simulate('click');
        expect(component.state('score')).toEqual(0);
        
    })

    test('it changes to green when score is > 0', () => {
        const component = mount(<App />);

        component.setState({score: 0});
        expect(component.instance().scoreColor()).toEqual('red');
        component.setState({score: 1});
        expect(component.instance().scoreColor()).toEqual('green');
    })
})

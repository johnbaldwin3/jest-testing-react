import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


describe('<App />', () => {
  test('it renders <App /> component', ()=> {
    const component = mount(<App />);
    expect(component).toHaveLength
  })
})

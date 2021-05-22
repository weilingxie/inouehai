import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


describe('App',()=>{
    test('render without crashing', () => {
    const wrapper =  shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


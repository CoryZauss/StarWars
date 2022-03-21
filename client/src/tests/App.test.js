import React from 'react'
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from '../components/App.jsx'
import Nav from '../components/Nav.jsx'

Enzyme.configure({ adapter: new Adapter() });

describe('<App>', () => {
  it('should display explore the star wars universe', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").text()).toEqual("Explore the StarWars Universe");
  });
  it("should render <Nav /> on button click", () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.find('div div').text()).toBe('<Nav />')
  });
});


//! TODO: add test for changing page changes usestate
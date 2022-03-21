import React from "react";
import { act } from "react-dom/test-utils";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Page from "../components/Page.jsx";
import Nav from "../components/Nav.jsx";

import "regenerator-runtime/runtime";

// import { setImmediate } from "timers";
// jest.mock("axios");

Enzyme.configure({ adapter: new Adapter() });


describe("<Page>", () => {

  it("should set title of page to page prop", () => {
    const wrapper = shallow(<Page page="starships" />);
    expect(wrapper.find("#page-title").text()).toBe("starships");
  });

});

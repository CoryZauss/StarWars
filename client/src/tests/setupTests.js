const Enzyme = require("enzyme");
const Adapter = require( "@wojtekmaj/enzyme-adapter-react-17");

Enzyme.configure({ adapter: new Adapter() });

//! Not working for some reason so importing everything directly in test suites for now
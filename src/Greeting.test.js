import React from "react";
import { shallow } from "enzyme";
import Greeting from "./Components/greeting";

//Current Date time testing on greeting
describe("Greeting testing", () => {
    var wrapper;
    wrapper = shallow(<Greeting />);

    test("Mock Date and Time", () => {

    const nowString = '2018-02-02T20:20:20';
    const MockDate = (lastDate) => (...args) =>
    new lastDate(...(args.length ? args : [nowString]));
    global.Date = jest.fn(MockDate(global.Date));
    expect(
      shallow(<Greeting />).find('h6').text()
    ).toEqual('Friday, February 2nd 2018, 8:20:20 pm');

    // Restore original object
    global.Date.mockRestore();
    });

    //Greeting Text display testing
    test("To display Greeting", () => {
      expect(wrapper.find("h4").text()).toBe("Welcome Back!");
    });
    
  
})

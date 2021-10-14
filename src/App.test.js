import React from "react";
import { shallow } from "enzyme";
import App from "./App";


describe("Submit Form Testing", () => {

 var wrapper;
 wrapper = shallow(<App />);

 test("Initial value of the Paginated current page is to 1", () => {
    expect(wrapper.find('Pagination').props().currentPage).toEqual(1);
 });
})

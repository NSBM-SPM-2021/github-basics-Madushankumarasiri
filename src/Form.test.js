import React from "react";
import { shallow, mount } from "enzyme";
import Form from "./Components/Form";

//Submit button value testing
describe("Add Form Testing", () => {
 var wrapper;
 wrapper = shallow(<Form />);
 test("Render the button with text of `SUBMIT` Text", () => {
    expect(wrapper.find('#SubmitButton').text()).toEqual("SUBMIT");
 });
});

//Form fields state capturing testing
describe("<Form />", () => {
   let wrapper;
   const setState = jest.fn();
   const useStateSpy = jest.spyOn(React, "useState")
   useStateSpy.mockImplementation((init) => [init, setState]);

   wrapper = shallow(<Form />);
   console.log(wrapper)

   afterEach(() => {
       jest.clearAllMocks();
   });

   describe("Value Input", () => {
      it("Should capture value correctly onChange", () => {
          const title = wrapper.find("input").at(0);
          title.simulate('change', { target: { value: '5000' } })
          expect(setState).toHaveBeenCalledWith('5000');
      });
   });

   describe("Date input", () => {
      it("Should capture date correctly onChange", () => {
          const title = wrapper.find("input").at(1);
          title.simulate('change', { target: { value: '2021-10-22T15:13' } })
          expect(setState).toHaveBeenCalledWith('2021-10-22T15:13');
      });
   });

});

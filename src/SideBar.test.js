import React from "react";
import { shallow } from "enzyme";
import SideBar from "./Components/SideBar";
import image from "./../public/svg.svg";

//Image loading testing on sidebar
describe("Image Rendering", () => {

 var wrapper;
 wrapper = shallow(<SideBar />);

 test("Render the button with text of `SUBMIT` Text", () => {
    expect(wrapper.find('img').prop("src")).toEqual(image);
 });
})

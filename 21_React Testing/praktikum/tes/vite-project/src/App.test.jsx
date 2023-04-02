import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";

import App from "./App";

test("loads and displays greeting", () => {
  // ARRANGE
  // shallow(<App />)
  // const wrapper = shallow(<App />);
  render(<App />);

  // ASSERT
  // expect(wrapper.getByText("Hallo")).toBeInTheDocument();
  expect(screen.getByText("Hello")).toBeInTheDocument();
});

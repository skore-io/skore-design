import * as React from "react";
import { shallow } from "enzyme";
import { ToggleButton } from "../index";

const component = shallow(
  <ToggleButton active colorVariation="#FDAFBB" label="Botão teste" />
);

describe("ToggleButton", () => {
  it("renders", () => {
    expect(component.exists()).toEqual(true);
  });

  // eslint-disable-next-line jest/no-commented-out-tests
  // it("snapshotShot", () => {
  //   expect(component.getElements()).toMatchSnapshot();
  // });
});

import * as React from "react";
import { shallow } from "enzyme";
import Styler from "../index";
import { ToggleButton } from "../../ToggleButton";

const component = shallow(
  <Styler>
    <ToggleButton active colorVariation="#FDAFBB" label="Botão teste" />
  </Styler>
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

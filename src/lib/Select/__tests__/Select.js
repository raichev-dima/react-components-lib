import React from "react";
import Select from "../Select";
import renderer from "react-test-renderer";

const items = [
  { value: "us", text: "USA" },
  { value: "by", text: "Belarus" }
];

describe("Select", () => {
  it("renders properly", () => {
    const tree = renderer
      .create(
        <Select>
          <Select.Option item={items[0]} render={() => items[0].text}/>
          <Select.Option item={items[1]} render={() => items[1].text}/>
        </Select>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
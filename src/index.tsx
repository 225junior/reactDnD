import * as React from "react";
import { render } from "react-dom";
import VerticalExample from "./VerticalExample";
import HorizontalExample from "./HorizontalExample";

import "./index.css";

export default class Examples extends React.PureComponent<{}, {}> {
  render() {
    // console.log('Examples.render');
    return (
      <div>
        <h1>react-list-drag-and-drop</h1>
        <div className="examples">
          <HorizontalExample />
          <VerticalExample />
        </div>
      </div>
    );
  }
}
render(<Examples />, document.getElementById("root"));

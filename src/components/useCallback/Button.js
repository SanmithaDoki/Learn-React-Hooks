import React from "react";

function Button({ clickHandler, children }) {
  console.log("Rendering Button " + children);
  return <button onClick={clickHandler}>{children}</button>;
}

export default React.memo(Button);

import React from "react";
import { ObjectInspector } from "react-inspector";

export function Component() {
  return <ObjectInspector data={{ "Hello": "World" }} />;
}

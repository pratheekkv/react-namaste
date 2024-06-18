import React from "react";
import ReactDOM from 'react-dom';

const heading = React.createElement("h1",{},"Hello World React");

const heading1 = React.createElement("h2",{},"Hello World React2");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(heading1);
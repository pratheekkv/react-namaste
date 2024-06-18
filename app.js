import React from "react";
import ReactDOM from 'react-dom/client';


//JSX Element ( React Element)
const jsxHeading = <h1>Heading with JSX { 100 *10 } </h1>;

const jsxTitle = <h1>Heading with JSX</h1>;

const HeadingComponent = () => (
    <div>
        {jsxHeading}
        <h1>Heading with Component</h1>
    </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<HeadingComponent />);


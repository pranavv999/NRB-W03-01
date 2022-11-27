import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const documentRoot = document.getElementById("root");
const root = ReactDOM.createRoot(documentRoot);

// -----------------------------------------------------------

// Nested Header Element using createElement START

const header = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "This is H1"),
  React.createElement("h2", {}, "THis is H2"),
  React.createElement("h3", {}, "This is H3"),
]);
root.render(header);

// Nested Header Element using createElement END

// -----------------------------------------------------------

// Header Elemet using JSX START

const headerJSX = (
  <div className="title">
    <h1>This is H1</h1>
    <h2>This is H2</h2>
    <h3>This is H3</h3>
  </div>
);

// root.render(headerJSX);

// Header Elemet using JSX END

// -----------------------------------------------------------

// Header Elemet using Functional Com START

const Header = () => {
  return (
    <div className="title">
      <h1>This is H1</h1>
      <h2>This is H2</h2>
      <h3>This is H3</h3>
    </div>
  );
};

// root.render(<Header />);

// Header Elemet using Functional Com END

// -----------------------------------------------------------

// Composition of Component START

const App = () => {
  return (
    <>
      {<Header />}
      {<Header></Header>}
      {Header}
    </>
  );
};

// root.render(<App />);
// Composition of Component END

// -----------------------------------------------------------

// NavBar

const NavigationBar = () => {
  const logo = new URL("../public/icons/user.png", import.meta.url); //Source : https://parceljs.org/recipes/react/
  const searchLogo = new URL("../public/icons/search.png", import.meta.url);
  console.log(logo, "ppppp");
  return (
    <div className="nav-container">
      <a href="/">
        <img
          src="https://parceljs.org/parcel.fb905a63.png"
          width="38"
          height="34"
          alt=""
        />{" "}
        <img
          src="https://parceljs.org/logo.49e8bbc1.svg"
          alt="Parcel"
          width="120"
          height="34"
        />{" "}
      </a>

      <div className="input-parent">
        <input type="text" className="search" placeholder="Search..." />
        <div>
          <img src={searchLogo} height={34} />
        </div>
      </div>

      <img src={logo} height={34} />
    </div>
  );
};

root.render(<NavigationBar />);

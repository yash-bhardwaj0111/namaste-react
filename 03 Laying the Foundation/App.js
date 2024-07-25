import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactElement - JS Object => HTMLElement(render)

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");



//JSX - HTML - like or XML - like syntax
//JSX (transpiled before it reaches the JS) - PARCEL - Babel

//JSX => transpiled to React.createElement (using babel) => ReactElement - JS Object => HTMLElement(render)
//React Element
// const heading = <h1 className="head" tabIndex="1"> Namaste React using JSX </h1>;

/** --------------------------------------------------------------*****************------------------------------------------------------------------------------------ */
                                    //React Functional Component :- a function that returns some peice of JSX or React Element 

//component 1
// We can also use normal fun. in place of arrow fun. as by EOD everything is JS.
const Title  = () => 
     (
        <h1 className="head">Namaste React using JSX 🚀</h1>
    );  

// const HeadingComponent = () => {
//     return <h1 className="heading" >Namaste React Functional Component</h1>;
// }
                        //OR
//component 2
// /* Rendering title (component 1) into component 2  */  => Component Composition 
const HeadingComponent = () => (
    <div id="container">
        <Title > </Title>   OR
         <Title/>           OR
         {Title ()} 
     <h1>Namaste React Functional Component</h1>
     </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering React Element
// root.render(heading);

// Rendering React functional Component
root.render(<HeadingComponent />);


/** --------------------------------------------------------------*****************------------------------------------------------------------------------------------ */




// Writing any JS. inside JSX code using {number} OR { 10+20} OR any expression .

// const number = 1000;
// const HeadingComponent2 = () => (
//     <div id="container">
//         <h2>{10+20}</h2>
//      <h1>Namaste React Functional Component</h1>
//      </div>
// );

// Putting React Element inside React Element 
// const elem = <span>React Element </span>;

// const title =  (
//     <h1 className="head">
//         {elem}
//         Namaste React using JSX 🚀</h1>
// );  
// Putting React Element inside JSX => Same as above , as we can write any expression inside JSX using {}.

// const title =  (
//     <h1 className="head">Namaste React using JSX 🚀</h1>
// );  

// const HeadingComponent2 = () => (
//     <div id="container">
//         {title}
//      <h1>Namaste React Functional Component</h1>
//      </div>
// );

// const root1 = ReactDOM.createRoot(document.getElementById("root"));


// Rendering React functional Component
// root.render(<HeadingComponent2 />);
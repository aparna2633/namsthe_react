const heading= React.createElement(
    "h1",
    {
    id:"title",
},
"Namasthe React"
);
const heading1= React.createElement(
"h2",
    {
    id:"title1",
},
"Namasthe React"
);
const component =React.createElement(
    "div",
    {
        id:"component",
    },
    [heading,heading1]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(component);
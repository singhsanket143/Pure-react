const App = () => {
    // whenever we cll this method a react element should be created and returned
    return <h1>hello world</h1>
}

const rootContainer = document.getElementById("root");
const root = ReactDOM.createRoot(rootContainer);

root.render(App());
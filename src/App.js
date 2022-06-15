import {useState} from "react";

function App() {
    const [state, setState] = useState(0)

    const increment = () => setState(prev => prev + 10);

    return (
        <div className="App">
            <h1 style={{fontSize: 54, color: 'blue'}}>value = {state}</h1>
            <button
                style={{background: 'black', color: "yellow", padding: 18}}
                onClick={increment}
            >
                incremernt
            </button>
        </div>
    );
}

export default App;

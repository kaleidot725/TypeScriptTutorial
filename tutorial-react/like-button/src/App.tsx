import './App.css'
import {useState} from "react";

function App() {
    return LikeButton()
}

function LikeButton() {
    const [count, setCount] = useState(999)
    const handleCLick = () => {
        setCount(count + 1)
    };
    return <span className="likeButton" onClick={handleCLick}>❤️ {count}</span>;
}

export default App

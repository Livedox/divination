import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import devinations from "./divinations-content";


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function App() {
    const [activeCount, setActiveCount] = useState(0);
    const increaseTheNumberOfActive = () => setActiveCount(activeCount + 1);
    const [contents, setContents] = useState([]);
    useEffect(() => {
        const temp = [];
        for(let i = 0; i < 10; i++) {
            temp.push(devinations.splice(getRandomInt(0, devinations.length), 1)[0]);
        }
        setContents(temp);
    }, []);
    return (
        <div className="main">
            <div className="background">
                <div className="background__left" />
                <div className="background__right" />
            </div>
            <div className="cards-container">
                {contents.map((item, i) => {
                    return <Card
                        content={item}
                        activeCount={activeCount}
                        increaseTheNumberOfActive={increaseTheNumberOfActive}
                        key={"a" + i}
                    />
                })}
            </div>
        </div>
    );
}

export default App;

import { useState } from "react";
import "./card.css";


function Card({content, activeCount, increaseTheNumberOfActive}) {
    const [isActive, setActive] = useState(false);
    const activate = () => {
        if(activeCount < 3) {
            setActive(true);
            increaseTheNumberOfActive();
        }
    }
    return (
        <div
          className={"card " + (isActive ? "card_active" : "")}
          onClick={activate}
        >
            <div className="card__back" />
            <div className="card__front">
                <span>{content}</span>
            </div>
        </div>
    );
}

export default Card;
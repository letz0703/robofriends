import react, { useReducer } from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map((cval, i) => {
                return (
                    <Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                );
            })}
        </div>
    );
};

export default CardList;

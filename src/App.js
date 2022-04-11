import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: "",
        };
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value });

        // console.log(filteredRobots);
    };

    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name
                .toLowerCase()
                .includes(this.state.searchfield.toLowerCase());
        });

        return (
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />;
            </div>
        );
    }
}

export default App;
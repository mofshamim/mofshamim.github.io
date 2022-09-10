import React, { Component } from "react";
import Header from "../../components/header/Header";


class Home extends Component {
    render() {
        return (
            <>
                <Header theme={this.props.theme} setTheme={this.props.setTheme} />
                <h1>Home Page</h1>
            </>

        );
    }
}

export default Home;

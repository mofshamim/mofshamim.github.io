import React, { Component } from "react";
import Header from "../../components/header/Header";

class Experience extends Component {
    render() {
        return (
            <>
                <Header theme={this.props.theme} setTheme={this.props.setTheme} />
                <h1>Experience Page</h1>
                {/* <Greeting theme={this.props.theme} />
          <Skills theme={this.props.theme} />
          <Footer theme={this.props.theme} />
          <TopButton theme={this.props.theme} /> */}
            </>
        );
    }
}

export default Experience;

import React from  "react";

import "./Main.scss";

export class Main extends React.Component{
    render() {
        return (
            <main className="Main">
                <div className="Container">
                    {this.props.children}
                </div>
            </main>
        )
    }
}

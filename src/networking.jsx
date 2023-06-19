import { Component } from "react";

export default class Networking extends Component {
  render() {
    return (
      <div className="networking">
        <div className="section">
          <div className="section-content">
            <h1>Networking</h1>
          </div>
          <div className="bubbles">
            <div className="bubble large" />
            <div className="bubble large" />
            <div className="bubble small" />
            <div className="bubble small" />
            <div className="bubble large" />
            <div className="bubble large" />
            <div className="bubble large" />
            <div className="bubble small" />
            <div className="bubble small" />
          </div>
        </div>
        <div className="text-content">
          <div className="title">
            <h1>My networking life</h1>
          </div>
          <div className="content">
            <p>
              I started learning networking on level 2 and the Unit was great, I
              got introduced to cisco packet tracer which is great software for
              simulating networks, I started out by building 3 basic networks as well of bui
            </p>
          </div>
        </div>
      </div>
    );
  }
}

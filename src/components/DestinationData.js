import { Component } from "react";
import "./Destination.css";

class DestinationData extends Component {
  render(props) {
    return (
      <>
        <div className={this.props.ClassName}>
          <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>

          <div className="image">
            <img src={this.props.photo1} alt="img" />
            <img src={this.props.photo2} alt="img" />
          </div>
        </div>
      </>
    );
  }
}

export default DestinationData;

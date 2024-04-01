import { Component } from "react";
import ReactPlayer from "react-player";
import { BsBackspace } from "react-icons/bs";
import Popup from "reactjs-popup";
import "./App.css";

class App extends Component {
  state = { updatedList: [] };

  required = () => <p className="para"> Enter the valid github username</p>;

  render() {
    return (
      <div>
        <input type="search" onBlur={this.required} />
        <img src="https://res.cloudinary.com/dowjvitxs/image/upload/v1709190564/Frame_8830_gsn0a3.png" />
      </div>
    );
  }
}

export default App;

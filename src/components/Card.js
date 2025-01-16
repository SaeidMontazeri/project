import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

// function Card({src, firstname, lastname}) {
//   return (
//     <div class="card col-4" style={{ width: "400px" }}>
//       <img class="card-img-top" src={src} height={500} alt="Card image" />
//       <div class="card-body">
//         <h4 class="card-title">{firstname}</h4>
//         <p class="card-text">{lastname}</p>
//         <a href="#" class="btn btn-primary"></a>
//       </div>
//     </div>
//   );
// }

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card col-4" style={{ width: "27rem" }}>
        <img
          src={this.props.src}
          class="card-img-top"
          alt={this.props.name}
          height={300}
        />
        <div class="card-body">
          <h5 class="card-title" style={{ textAlign: "center", width: "100%" }}>
            {this.props.name}
          </h5>
          <p class="card-text" style={{ textAlign: "center", width: "100%" }}>
            {this.props.price}
          </p>
          <button
            onClick={() => {
              window.location.href = this.props.src;
            }}
            className="btn btn-primary"
            style={{ textAlign: "center", width: "100%" }}
          >
            Click me
          </button>
        </div>
      </div>
    );
  }
}
export default Card;

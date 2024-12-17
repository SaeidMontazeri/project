import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Card(props) {
  return (
    <div class="card col-4" style={{ width: "400px" }}>
      <img class="card-img-top" src={props.src} alt="Card image" />
      <div class="card-body">
        <h4 class="card-title">{props.firstname}</h4>
        <p class="card-text">{props.lastname}</p>
        <a href="#" class="btn btn-primary"></a>
      </div>
    </div>
  );
}
export default Card;

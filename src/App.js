import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import saeid from './saeid.jpg'
import sadeq from './sadeq.jpg'
import soheil from './soheil.jpg'

function App() {
  return (
    <div className="container">
      <div className="row">
        <Card firstname={'Sadeq'} lastname={'Mahnami'} src={sadeq}/>
        <Card firstname={'Saeid'} lastname={'Mirian'} src={saeid}/>
        <Card firstname={'Soheil'} lastname={'Qazi'} src={soheil}/>
      </div>
    </div>
  );
}

export default App;

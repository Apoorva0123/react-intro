import './App.css';
import logo from './Apoorva-logo.png';

function App() {
  return (
    <nav className="App">
      <Logo path={logo} />
      <Links options={["Services","Projects","About"]} />
      <Button />
    </nav>
  );
}

const Logo = (props) => {
  return <img src={props.path} alt="logo"></img>
}

const Links = (props) => {
  return (
    <ul className="menu">
      {props.options.map((e) => {
        return <li className="options">{e}</li>
      })}
    </ul>
  )
}

const Button = () => {
  return <button>Contact</button>
}

export default App;
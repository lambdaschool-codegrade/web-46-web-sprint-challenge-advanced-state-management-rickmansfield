import React, { useEffect} from "react";
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { fetchSmurfs } from "./actions";

// class App extends Component {
//   componentDidMount() {
//     axios.get('http://localhost:3333/smurfs')
//     .then(res => console.log(res))
//     .catch(err => console.log('Axios Error', err));
//   }
const App = (props) => {
  // console.log('App.js ln:21 props', props);
  useEffect(()=>{
    props.dispatch(fetchSmurfs());
    // eslint-disable-next-line
  },[])
  // render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  // }
}

// export default App;
const mapStateToProps = state => {
  return{
    isLoading: state.isLoading,
    smurfs: state.smurfs,
    errorMessage: state.errorMessage,
  }
}

export default connect(mapStateToProps)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
import './App.css';
import NavBar from './components/NavBar';
import Bollywood from './components/BollywoodHollywoodFoodFitness/Bollywood';
import Fitness from './components/BollywoodHollywoodFoodFitness/Fitness';
import Food from './components/BollywoodHollywoodFoodFitness/Food';
import Hollywood from './components/BollywoodHollywoodFoodFitness/Hollywood';
import Home from './components/HomePage/Home';
import Technology from './components/Technology/Technology';
import { Route } from 'react-router-dom';
import { Component } from 'react';

class App extends Component{
  render(){
    return (
      <>
        <h1 className="text-center">
        <div class="main-heading">The</div>
          <strong>Serien</strong>
        </h1>
        {/* <NavBar headerList={this.states.headerList}/> */}
        <NavBar />
        <hr />
        <Route exact path="/" component={Home}><Home /></Route>
        <Route path="/bollywood" component={Bollywood}><Bollywood /></Route>
        <Route path="/fitness" component={Fitness}><Fitness /></Route>
        <Route path="/food" component={Food}><Food /></Route>
        <Route path="/hollywood" component={Hollywood}><Hollywood /></Route>
        <Route path="/technology" component={Technology}><Technology /></Route>
      </>
    );
  }
}

export default App;

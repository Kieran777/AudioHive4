import React, {Component} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faHome, faQuestion, faBriefcase, faNewspaper, faAddressBook  } from '@fortawesome/free-solid-svg-icons';
import Head from './comps/Head';


import Home from './comps/Home';
import FAQ from './comps/FAQ';
import Contact from './comps/Contact';
import Articles from './comps/Articles';
import Products from './comps/Products';

 
const symbolHighlight = {
  color:'#ffffff'
}
const symbolNormal = {
  color:'#e88c00'
}
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currPage:2
    }
    this.handleHighlight = this.handleHighlight.bind(this);
    this.goRight = this.goRight.bind(this);
    this.goLeft = this.goLeft.bind(this);
    this.goSymbol = this.goSymbol.bind(this);
    this.pageController = this.pageController.bind(this);
  }

  handleHighlight(x){
    var highlightArr = [symbolNormal, symbolNormal, symbolNormal, symbolNormal, symbolNormal];
    highlightArr[this.state.currPage] = symbolHighlight;

    return highlightArr[x];
  }
  goRight(){
    var x = 0;
    if(this.state.currPage<4){
      x= this.state.currPage;
      x++;
    }
    this.setState({
      currPage:x
    })
  }
  goLeft(){
    var x = 4;
    if(this.state.currPage>0){
      x= this.state.currPage;
      x--;
    }
    this.setState({
      currPage:x
    })
  }
  goSymbol(x){
    this.setState({
      currPage:x
    })
  }
 pageController(){
   var pageArr = [Products(), Articles(), Home(), FAQ(), Contact()];
   return pageArr[this.state.currPage];

 }

  render(){
   // var pageArr = [Products, Articles(), Home(), FAQ(), Contact()];

  return (
    <div className="App">
      {this.pageController()}
      <FontAwesomeIcon className="pageBut" id="productBut" icon={faBriefcase} style={this.handleHighlight(0)} onClick={()=>{this.goSymbol(0)}}/>
      <FontAwesomeIcon className="pageBut" id="articlesBut" icon={faNewspaper} style={this.handleHighlight(1)} onClick={()=>{this.goSymbol(1)}}/>
      <FontAwesomeIcon className="pageBut" id="homeBut" icon={faHome} style={this.handleHighlight(2)} onClick={()=>{this.goSymbol(2)}}/>
      <FontAwesomeIcon className="pageBut" id="aboutBut" icon={faQuestion} style={this.handleHighlight(3)} onClick={()=>{this.goSymbol(3)}}/>
      <FontAwesomeIcon className="pageBut" id="contactBut" icon={faAddressBook} style={this.handleHighlight(4)} onClick={()=>{this.goSymbol(4)}}/>
      <FontAwesomeIcon id="rightBut" icon={faAngleRight} onClick={this.goRight}/>
      <FontAwesomeIcon id="leftBut" icon={faAngleLeft} onClick={this.goLeft}/>

      
      <Head />
    </div>
  );
}
}

export default App;

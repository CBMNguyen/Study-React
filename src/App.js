import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import HeaderLogin from './components/HeaderLogin';
import LoginForm from './components/LoginForm';
import MenuIcon from './components/MenuIcon';
import TrafficLight from './components/TrafficLight';
import Accordion from './components/Accordion';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class App extends Component {
  constructor(props){
    super(props);

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onAccordionClick =this.onAccordionClick.bind(this);
    this.inputElement = React.createRef();
// ========================================DATA=========================================
    this.menu = [
      {name: "HOME", icon: "zmdi zmdi-home"},
      {name: "DEALS", icon: "zmdi zmdi-card-giftcard"},
      {name: "UPLOAD", icon: "zmdi zmdi-coffee"},
      {name: "SETTINGS", icon: "zmdi zmdi-settings"}
    ];

    this.state = {
      newSingTitle:'',
      sings: [
        {sing: 'Sao Em Vô Tình', isListened: false},
        {sing: 'Về Bên Anh', isListened: false},
        {sing: 'Sóng Gió', isListened: false}
      ],
      currentColor: RED,
      isCollapsed: false
    };
    //=========================================TrafficLight=============================== 
    setInterval(() =>{
      this.setState({
         currentColor: this.getNextColor(this.state.currentColor)
        });
    }, 1000);

  }

  getNextColor(color){
    switch(color){
      case RED: return ORANGE;
      case ORANGE: return GREEN;
      default: return RED;
    }
  }

  // =========================================Sing(todo-list)===============================
  // Cach tu nghi
  // valueClicked(index){
  //   let item = this.state.items.slice();
  //   item[index].isListened = !item[index].isListened;
  //   return item;
  // }

  // onItemClick = (index) => {
  //   this.setState({items: this.valueClicked(index)});
  // };

  onSingClick = (item) => {
       return (event)=>{
        const sings = [...this.state.sings].slice();
        const index = sings.indexOf(item);
        sings[index].isListened = !sings[index].isListened;
        this.setState({sings});
       };
     };

  onKeyUp(event){
    if(event.keyCode === 13){//enter key
      let text = event.target.value;
      if(!text){return;};

      text = text.trim();

      if(!text){return;};

      this.setState({
        newSingTitle: '',
        sings:[
          {sing: text, isListened: false},
          ...this.state.sings
        ]
      });
    }
  }

  onChange(event){
    this.setState({newSingTitle: event.target.value})
  }


  componentDidMount(){
    this.inputElement.current.focus();
  }

  // =======================================Accordion=================================
  onAccordionClick(){
    this.setState({isCollapsed: !this.state.isCollapsed});
  }

  render() {  
    const {currentColor, newSingTitle} = this.state;
    return (
      <div className="App">
      <HeaderLogin />
      <LoginForm />
      <TrafficLight currentColor={currentColor}/>
      <div>
        {this.menu.map((content, index) => <MenuIcon key = {index} item= {content} />)};
      </div>
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
    
          <div className="sings">
          <div className="singHeader">
                    <i className="zmdi zmdi-check-all"></i>
                    <input type="text" value={newSingTitle} placeholder="add to the song" 
                           onKeyUp={this.onKeyUp} onChange={this.onChange} ref= {this.inputElement}>
                    </input>
                </div>
            {this.state.sings.map((item, index) => <TodoItem onclick={this.onSingClick(item)} key = {index} item = {item} />)}
          </div>

          <Accordion heading="Name" onAccordionClick={this.onAccordionClick} isCollapsed = {this.state.isCollapsed}>
            Nguyen Minh Hieu
          </Accordion>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Tab from './components/tab';
import Control from './components/control';
import List from './components/list';
import Data from './data/list';
function id_random(){
  function Random(){
      return Math.floor((1+Math.random())* 0x10000).toString(16).substring(1);
  };
  return Random() + Random() + Random() +Random() + Random();
}
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:Data,
      display_add: false
    }
  }

  onToggle = ()=>{
    this.setState({
      display_add : !this.state.display_add
    });
  }
  onClose =()=>{
    this.setState({
      display_add: false
    })
  }
  props_add=(data_prop)=>{
    let oject = {
      id : id_random(),
      name: data_prop.namejob,
      status: data_prop.status
    }
    console.log(oject);
    var data_state = this.state.data;
    data_state.push(oject);
    this.setState({
      data: data_state
    });
    localStorage.setItem('recipe', JSON.stringify(data_state));
  }
  componentWillMount(){
    if(localStorage && localStorage.getItem('recipe')){
      const recipe = JSON.parse(localStorage.getItem('recipe'));
      this.setState({data: recipe});
    }
  }
  onStatus=(id)=>{
    let data = this.state.data;
    data.forEach((item, index)=>{
      if(item.id === id){
        data[index].status = !data[index].status;
        this.setState({
          data:data
        })
        localStorage.setItem('recipe', JSON.stringify(data));
      }else{
        return false;
      }
    })
  }
  onDelete=(id)=>{
    let {data} = this.state;
    data.forEach((item, index)=>{
      if(item.id === id){
        data.splice(index, 1);
        this.setState({
          data:data
        })
        localStorage.setItem('recipe', JSON.stringify(data));
      }else{
        return false;
      }
    })
  }
  render() {
    var display_add = this.state.display_add;
    return (
      <div className="App">
        <div className="container">
          <div className="row">
          {display_add ? <Tab props_add={this.props_add}  onClose={this.onClose}/> : ''}
          <div className={display_add ? "col-12 col-sm-8" : "col-12"}>
              <div className="row">
                  <div className="col-12">
                    <button className="btn btn-primary m-4" onClick={this.onToggle}>Thêm công việc</button>
                  </div>
                  <Control />
                  <div className="col-12">
                  <List data={this.state.data} onStatus={this.onStatus} onDelete={this.onDelete}/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

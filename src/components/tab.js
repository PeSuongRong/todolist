import React, { Component } from 'react';

class tab extends Component {
  constructor(props){
      super(props);
      this.state={
          namejob:'',
          status:false
      }
  }
  onchange=(event)=>{
      var name = event.target.name;
      var value = event.target.value;
      if(name === "status"){
        if(value === "true"){
          value=true
        }else{
          value =false
        }
      }
      this.setState({
          [name] : value
      })
  }
  onSubmit=(even)=>{
      even.preventDefault();
      var name_value = document.getElementById("namejob").value;
      if(name_value === ""){
        alert('Bạn chưa nhập dữ liệu')
      }else{
        this.props.props_add(this.state);
        this.onClearn();
      }
  }
  onClose=()=>{
    this.props.onClose();
    this.onClearn();
  }
  onClearn=()=>{
    this.setState({
      namejob:'',
      status:false
    })
  }
    render() {
        return (
            <div className="col-12 col-sm-4 pt-5">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label className="float-left" htmlFor={"namejob"}>Tên:</label>
                  <input
                  type="text"
                  className="form-control"
                  id="namejob"
                  name="namejob"
                  value={this.state.namejob}
                  onChange={this.onchange} />
                </div>
                <div className="form-group">
                  <label className="float-left" htmlFor={"status"}>Trạng thái:</label>
                  <select
                  className="form-control"
                  id="status"
                  name="status"
                  value={this.state.status}
                  onChange={this.onchange}
                  >
                    <option value={true}>Kích hoạt</option>
                    <option value={false} >Ẩn</option>
                  </select>
                </div>
                <button className="btn btn-success m-5" type="submit">Lưu lại</button>
                <button className="btn btn-default" onClick={this.onClose}>Hủy bỏ</button>
              </form>
            </div>
        );
    }
}

export default tab;
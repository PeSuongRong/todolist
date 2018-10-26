import React, { Component } from 'react';
import Item from './item';
import Data from '../data/list';
class list extends Component {
    constructor(props){
        super(props);
        this.state = {
          tasks:Data
        }
    }
    render() {
        let elmButton = this.state.tasks.map((item, index)=>{
            return <Item item={item} key={index} index={index}/>
        })
        return (
            <table className="table">
            <thead>
                <tr>
                <th>STT</th>
                <th>Tên công việc</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td></td>
                <td>
                    <div className="form-group">
                    <input type="text" className="form-control" id="search" />
                    </div>
                </td>
                <td>
                    <div className="form-group">
                    <select className="form-control" id="sel2">
                        <option>Tất cả</option>
                        <option>Kích hoạt</option>
                        <option>Chưa kích hoạt</option>
                        <option>Chờ xác nhận</option>
                    </select>
                    </div>
                </td>
                <td></td>
                </tr>
                {elmButton}
            </tbody>
            </table>
        );
    }
}

export default list;
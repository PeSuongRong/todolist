import React, { Component } from 'react';
import Item from './item';
class list extends Component {
    render() {
        var data = this.props.data; //var {data} = this.props
        let elmButton = data.map((item, index)=>{
            return <Item item={item} key={item.id} index={index} onStatus={this.props.onStatus} onDelete={this.props.onDelete}/>
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
                    <input
                        type="text"
                        className="form-control"
                    />
                    </div>
                </td>
                <td>
                    <div className="form-group">
                    <select
                        className="form-control"
                    >
                        <option>Ẩn</option>
                        <option>Kích hoạt</option>
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
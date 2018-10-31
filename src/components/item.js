import React, { Component } from 'react';
class item extends Component {
    onStatus=()=>{
        this.props.onStatus(this.props.item.id)
    }
    onDelete=()=>{
        this.props.onDelete(this.props.item.id)
    }
    render() {
        return (
            <tr>
                <td>{this.props.index +1}</td>
                <td>{this.props.item.name}</td>
                <td><span onClick={this.onStatus} className={this.props.item.status === true ? 'btn badge badge-primary' : 'badge btn badge-danger'}>{this.props.item.status === true ? 'kích hoạt' : 'ẩn'}</span></td>
                <td>
                    <button className="btn btn-sm btn-primary m-1">Sửa</button>
                    <button className="btn btn-sm btn-danger" onClick={this.onDelete}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default item;
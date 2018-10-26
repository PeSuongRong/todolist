import React, { Component } from 'react';
class item extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.index +1}</td>
                <td>{this.props.item.name}</td>
                <td><span className="badge badge-danger">kích hoạt</span></td>
                <td>
                    <button className="btn btn-sm btn-primary m-1">Sửa</button>
                    <button className="btn btn-sm btn-danger">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default item;
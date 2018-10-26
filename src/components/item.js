import React, { Component } from 'react';

class item extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>Backend</td>
                <td><span className="badge badge-danger">Kích hoạt</span></td>
                <td>
                    <button className="btn btn-sm btn-primary m-1">Sửa</button>
                    <button className="btn btn-sm btn-danger">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default item;
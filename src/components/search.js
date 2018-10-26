import React, { Component } from 'react';

class search extends Component {
    render() {
        return (
            <div className="col-6">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nhập từ khóa" />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">Tìm</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default search;
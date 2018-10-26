import React, { Component } from 'react';

class tab extends Component {
    render() {
        return (
            <div className="col-12 col-sm-4">
              <h3>Thêm công việc</h3>
              <div className="form-group">
                <label htmlFor={"usr"}>Tên:</label>
                <input type="text" className="form-control" id="usr" />
              </div>
              <div className="form-group">
                <label htmlFor={"sel1"}>Trạng thái:</label>
                <select className="form-control" id="sel1">
                  <option>Kích hoạt</option>
                  <option>Chưa kích hoạt</option>
                  <option>Chờ xác nhận</option>
                </select>
              </div>
              <button className="btn btn-success m-5">Lưu lại</button>
              <button className="btn btn-default">Hủy bỏ</button>
            </div>
        );
    }
}

export default tab;
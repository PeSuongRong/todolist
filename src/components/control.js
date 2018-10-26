import React, { Component } from 'react';
import Search from './search';
class control extends Component {
    render() {
        return (
            <div className="col-12">
            <div className="row">
                <Search />
                <div className="col-6">
                    <div className="form-group">
                        <select className="form-control" id="sel2">
                            <option>Sắp xếp</option>
                            <option>A->Z</option>
                            <option>Z->A</option>
                        </select>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default control;
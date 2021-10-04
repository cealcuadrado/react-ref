import React from 'react';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div class="form-group">
                            <label>Texto:</label>
                            <input class="form-control"/>
                        </div>
                    </div>
                </div>
                <hr />
                <p>Texto: ?</p>
                <hr />
                <button class="btn btn-danger">
                    <i className="fa fa-times fa-fw"></i> Borrar Texto
                </button>
            </div>
        );
    }
}

export default Layout;
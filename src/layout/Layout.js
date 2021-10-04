import React from 'react';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this.myRef = React.createRef();

        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    updateState(event) {
        var text = event.target.value;
        this.setState({ text: text });
    }

    clearInput() {
        this.setState({ text: '' });
        this.myRef.current.focus();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div class="form-group">
                            <label>Texto:</label>
                            <input class="form-control" value={this.state.text} onInput={this.updateState} ref={this.myRef}/>
                        </div>
                    </div>
                </div>
                <hr />
                <p>Texto: {this.state.text}</p>
                <hr />
                <button class="btn btn-danger" onClick={this.clearInput}>
                    <i className="fa fa-times fa-fw"></i> Borrar Texto
                </button>
            </div>
        );
    }
}

export default Layout;
import React from 'react';


class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputVal: ""
        };
        this.changeInput = this.changeInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    changeInput(e){
        const newVal = e.target.value;
        this.setState({
            inputVal: newVal 
        });
    }

    addTodo(event){
        event.preventDefault();
        if(this.state.inputVal.length>0){
        this.props.onTodoAdd(this.state.inputVal);
        this.setState({
            inputVal: ""
        });
    }
    }

    render() {
        return <form
            onSubmit={this.addTodo}>
            <input
                type="text"
                value={this.state.inputVal}
                onChange={this.changeInput} />
            <button>Ekle</button>

            Addtodo companenti
        </form>
    }
}

export default AddTodo;

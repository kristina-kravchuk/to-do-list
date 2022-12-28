import { Component } from 'react';


export class List extends Component{
 state ={
    userList: "",
    toDoList: []


 }
 onChangeEvent(e){
    this.setState({userList: e})
 }
 addItem(input) {
    if (input === ''){
        alert("Plese, enter your plans")
    } else{
    let list = this.state.toDoList;
    list.push(input);
    this.setState({toDoList: list, userList: ''})
 }
}
deleteItem() {
    let list = this.state.toDoList;
    list = [];
    this.setState({toDoList: list})

}


 crrossedItem(event){
    const li = event.target;
    li.classList.toggle('crossed')
 }
 onFormSubmit(e) {
    e.preventDefault();
 }

render() {
    return(
        <div>
             <form onSubmit={this.onFormSubmit}>
            <div className='div'>
            <input type="text"
            onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value={this.state.userList}/>
            </div>
            <div className='div'>
                <button  onClick={() => this.addItem(this.state.userList)}>Add</button>
            </div>
            <ul>
                {this.state.toDoList.map((item, index) => (
                <li onClick={this.crrossedItem} key={index}>{item}</li>))}
            </ul>
            <div className='div'>
            <button  onClick={() => this.deleteItem()}>Delete</button>
            </div>
            </form>
        </div>
    )
}
}
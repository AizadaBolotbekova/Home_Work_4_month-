import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import classes from './todolist.module.css';
import Modal from "../../components/Modal/Modal";
import List from "../../components/List/List";
const TodoList = () => {
    const [ isShow, setIsShow ] = useState(false);
    const [ newTitle, setNewTitle ] = useState('');
    const [ search, setSearch ] = useState('');
    const [ currentEdit, setCurrentEdit ] = useState();

    localStorage.setItem("1", JSON.stringify({
        id:1 , 
        title: 'codingLS', 
        completed: false
    }))
    localStorage.setItem("2",JSON.stringify({
        id:2,
        title: "eat",
        completed: false
    }))
    localStorage.setItem("3",JSON.stringify({
        id:2,
        title: "sleep",
        completed: false
    }))

    const [ list, setList ]  = useState([  
        JSON.parse(localStorage.getItem("1")),JSON.parse(localStorage.getItem("2")),JSON.parse(localStorage.getItem("3"))
    ])
          
    const handleShow = () => setIsShow(!isShow);
    
    const handleAdd = () => {
        setList((prevTodo) => {
            return [ ...prevTodo, { id: list.length + 1 , title: newTitle, completed: false  } ]
        })
        setNewTitle('')
        handleShow()
    }
    const handleDone = (id) => {
    const currentIndex = list.findIndex((todo) => todo.id === id);
       list[currentIndex].completed = !list[currentIndex].completed;
       setList([...list]);
    } 
    const handleChangeText = (event) => {
        setNewTitle(event.target.value);
    }
    const handleDelete = (id) => {
        const filtered = list.filter(todo => todo.id !== id)
        setList([...filtered])
    }
    const handleSearch = (event) => {
        setSearch(event.target.value);
    }
    const handleEdit = (editTodo) => {
        const editList = list.map(todo => {
            if(todo.id === editTodo.id) {
                return { ...todo, title: editTodo.title }
            }
            return todo;
        })
        setList([...editList]);
        setCurrentEdit()
    }
    const resultSearch = list.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className={classes.wrapper}>
            <Button onClick={handleShow}>
                Добавить
            </Button>
            <Input
            placeholder={'search...'}
            onChange={handleSearch}
            value={search}
            name={'search'}
              />
            { isShow && <Modal handleShow={handleShow}>
                <p>{newTitle}</p> 
                <Input 
                placeholder={'Добавить'} 
                onChange={handleChangeText} 
                name={'add'} 
                value={newTitle}
                />
            <Button onClick={handleAdd}>
                Добавить
            </Button>
            <button onClick={handleShow}>Close</button>
            </Modal> }
            <List 
            list={resultSearch} 
            handleChangeCurrent={setCurrentEdit}
            handleDone={handleDone} 
            handleDelete={handleDelete}
            currentEdit={currentEdit}
            handleEdit={handleEdit}
            />
        </div>
    )
}


export default TodoList;
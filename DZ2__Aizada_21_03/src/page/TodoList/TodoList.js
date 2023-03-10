import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import classes from './todolist.module.css';
import Modal from "../../components/Modal/Modal";
import List from "../List/List";

const TodoList = () => {
    const [ isShow, setIsShow ] = useState(false);
    const [ newTask, setNewTask ] = useState('Пусто');
    const [ addInputValue, setAddInputValue ] = useState(null);


        const list = [
            {
                id:1 , 
                task: 'coding'
            },
            {
                id:2,
                task: 'eat'
            },
            {
                id:3,
                task: 'sleep'
            }
        ]
    const handleShow = () => {
        setIsShow(!isShow);
    };
    const handleChangeText = (text) => {
        setNewTask(text);
        setAddInputValue(text)
        console.log(newTask, 'new text')
    }
    return (
        <div className={classes.wrapper}>
            <Button handleShow={handleShow}>
                Добавить
            </Button>
            <Input />
            { isShow && 
                <Modal handleShow={handleShow}>
                    <p>{newTask}</p>
                    <input type="text" value={addInputValue} onChange={(event) =>  handleChangeText(event.target.value) }  />
                    <Button>
                        Добавить
                    </Button>
                    <button onClick={handleShow}>Close</button>
                </Modal>
            }
            <Button classN={'.addButton'}>fdsfd</Button>

            <List list={list}/>
        </div>
    )
}


export default TodoList;
import axios from "axios";
import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { baseURL } from "../utils/constant";
const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent }) => {

    const deleteTodo = () => {
        axios.delete(`${baseURL}/delete/${id}`).then(res => {
            console.log(res.data);
            setUpdateUI((prevState) => !prevState);;
        });
    };

    const updateToDo = () => {
        setPopupContent({text, id});
        setShowPopup(true)
    }

    return (
        <div className="toDo">
            {text}
            <div className="icons">
                <MdEdit className="icon" onClick={updateToDo}/>
                <MdDeleteForever className="icon" onClick={deleteTodo} />
            </div>
        </div>
    );
};

export default ToDo;
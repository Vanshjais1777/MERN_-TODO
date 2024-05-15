import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
const ToDo = () => {
    return (
        <div className="toDo">
            ToDo
            <div className="icons">
                <MdEdit className="icon" />
                <MdDeleteForever className="icon" />
            </div>
        </div>
    );
};

export default ToDo;
import React from "react";
import s from "../UserCard/index.module.css";
import { deleteUserAction } from "../../store/reducers/usersReduser";
import { useDispatch } from "react-redux";

const UserCard = ({ id, firstname, age }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.card}>
      <span onClick={() => dispatch(deleteUserAction(id))}>X</span>
      <p>Name:{firstname}</p>
      <p>Age:{age}</p>
    </div>
  );
};

export default UserCard;

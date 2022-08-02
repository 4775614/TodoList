// import React, { useState } from "react";
// import "./style.css";
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux' 
import { useNavigate } from 'react-router-dom'

export default function Detail() {
  let navigate = useNavigate()
  let {id} = useParams()
  const todoslist = useSelector((state) => state.todos.todos)
  let copy = todoslist.find((x) => x.id == id)
  console.log(todoslist)
  console.log(id)
  console.log(copy)

    return (
  <div>
    <div>상세페이지 입니다. </div>
    <div>{copy.title}</div>
    <div>{copy.body}</div>   
    <div>{copy.id}</div>   
    <button onClick={()=>navigate("/")}>zz</button>
  </div>
)
}
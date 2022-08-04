// import React, { useState } from "react";
import "./style.css";
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
      <div className='detailwrap'>
          <div className="detail">
              <div className='detail.cont'>
                  <div className='ID'>ID:{copy.id}</div>   
                  <div className='title'>{copy.title}</div>
                  <div className='body'>{copy.body}</div>   
                  <button onClick={()=>navigate("/")}>이전으로</button>
              </div>
          </div>
      </div>
  )
}
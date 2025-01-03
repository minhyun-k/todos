import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import store from '../state/store';
import swal from 'sweetalert';

const Insert = () => {
    // {id:0, todo:공부하기, status:true}
    let {dataCtrl} = store();
    
    let insert = (e)=>{
        e.preventDefault();
        let value = e.target.todo.value;
        let data = {
            id:uuidv4(), 
            todo:value, 
            status:false
        }
        if(value !== ''){
            dataCtrl({type:"post",data})        
        }else{
            swal("내용을 입력해주세요!");
        }
        e.target.todo.value = '';
        e.target.todo.focus();
        // as

    }

  return (
        <div className='insert'>
            <form onSubmit={insert}>
                <input type="text" name="todo" placeholder="오늘은 무엇을 하실건가요?"/>
                <button> + </button>
            </form>
        </div>
  )
}

export default Insert
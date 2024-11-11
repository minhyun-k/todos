import { create } from 'zustand'
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:4000/todos',
});

const store = create((set) => ({
  data: [],
  sortData: [],
  dataCtrl : async function(action){

    let res;
    switch(action.type){
        case 'get' : 
        res = await instance.get("/"); break;

        case 'post' : 
        res = await instance.post("/", action.data); break;

        case 'put' :
        res = await instance.put("/",action.data); break;

        case 'delete' :
        res = await instance.delete(`?id=${action.data}`); break;
    }
        set({data:res.data.list})

    // set({data:10})
    // set((d)=>{
    //     console.log(d)
    //     return {data:n}
    // })
  },
  sortCtrl : function(sort){
    set((state)=>{
      // true = 일을끝냄
      // false = 해야할일
      
      switch(sort.type){
        case 'Active': return {sortData: state.data.filter(obj=>obj.status == false)};
        case 'Completed': return {sortData: state.data.filter(obj=>obj.status == true)};
        default: return {sortData: state.data};
      }
    });
  }
}))

export default store
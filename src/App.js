  import {useState,useEffect} from 'react'
  import "./App.css"
  let App=()=>{
    let a=["https://cdn.pixabay.com/photo/2023/03/19/16/15/butterfly-7862893_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg",
      "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
      "https://cdn.pixabay.com/photo/2023/08/13/00/43/blue-8186653_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"]
      let h=["Image-1","Image-2","Image-3","Image-4","Image-5"]
      let [i,setI]=useState(0)
      let inc=()=>{
        setI((i)=>(i+1)%a.length)
      }
      let dec=()=>{
        setI((i)=>{
          if(i==0){
            return a.length-1
          }
          else{
            return i-1
          }
        })
      }
      let upd=(ind)=>{
        setI(()=>ind)
      }
      useEffect((c)=>{
         let iid=setInterval(inc,5000)
         return()=>{
          clearInterval(iid)
         }
      },[])
      return(<div className='con'>
        <img src={a[i]}/>
        <div className='head'>
          {h[i]}
        </div>
        <i className="fa-solid fa-circle-arrow-left lt" onClick={dec}></i>
        <i className="fa-solid fa-circle-arrow-right gt" onClick={inc}></i>
        <div className='dot'>
          {
            a.map((item,ind)=>{
              return(<i class={ind===i?"fa-solid fa-circle":"fa-regular fa-circle"}onClick={()=>upd(ind)}></i>)
            })
          }
        </div>
      </div>)

  }
  export default App
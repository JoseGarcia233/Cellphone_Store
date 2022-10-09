import React,{useState, useEffect} from 'react'
import'../css/addChellp.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const api ='https://localhost:44338/api/cellphones/';

export default function UpdateCellphones() {
    let nav = useNavigate();
  const [data, setData] = useState({
    brandNam:"",
    model:"",
    storage:"",
    price :"",
    imgUrl :"",

    
  });

  function submit(e){
    e.preventDefault();
    axios.put(api,{
      brandNam:data.brandNam,
      model:data.model,
      storage:data.storage,
      price:data.price,
      imgUrl:data.imgUrl
    }) 
    .then(res =>{
      console.log(res.data);
      nav('/Listcellp');
    })
  }

  function handle(e){
    
    const ndata = {...data}
    ndata[e.target.id] = e.target.value
    setData(ndata)
    console.log(ndata)
  }

  // useEffect(() => {
  //   setData(localStorage.getItem('data.brandNam'));
  //   setData(localStorage.getItem('data.model'));
  //   setData(localStorage.getItem('data.storage'));
  //   setData(localStorage.getItem('data.price'));
  //   setData(localStorage.getItem('data.imageUrl'));
  // },[]) 

  return (
    <div className='container-form'>
    <h1>Update Cell Phones</h1>
      <form onSubmit={(e)=> submit(e)}>
        <input onChange={(e)=>handle(e)} id='brandNam' value={data.brandNam} placeholder='Write the Brand here' type="text" required />
          <br/>
        <input onChange={(e)=>handle(e)} id='model'value={data.model} placeholder='Write the Model here'type="text" required />
          <br/>
        <input onChange={(e)=>handle(e)}  id='storage' value={data.storage} placeholder='Whrite the Storage here' type="text" required />
          <br/>
          <input onChange={(e)=>handle(e)}  id='price' value={data.price} placeholder='Write the Price here without symbols' type="text" required />
          <br/>
          <input onChange={(e)=>handle(e)}  id='imgUrl' value={data.imgUrl} placeholder='Put the Url image here' type="text" required />
          <br/>
        <button type="submit" class="btn btn-outline-secondary">Save</button>
      </form>
  </div>
  )
}

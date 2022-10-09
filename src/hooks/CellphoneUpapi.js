import {useState, useEffect} from 'react';
import axios from 'axios';


const CellphoneUpapi =(id) => {
    const [cellphones, setCellphones] = useState([]);
  const [err, setErr] = useState([]);
  
  useEffect(() => {
    // get request using axios inside useEffect React hook
    const getCellPhones = () =>{
        axios.post('https://localhost:44338/api/cellphones/'+id)
        .then((response)=> setCellphones(response.data))
        .catch((error )=> setErr(error))
      
    }
    getCellPhones()
  }, [id]);
  return[cellphones, err]
}

export default CellphoneUpapi
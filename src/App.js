import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [data,setData] = useState([])
  const [search,setsearch] = useState('')
  const [year,setyear] = useState('')
  const [type,settype] = useState('')
const click = ()=>{
   fetch(`https://www.omdbapi.com/?apikey=6e30c4b4&s=${search}`)
      .then(res => res.json()) 
      .then(data => setData(data.Search)) 
      .catch(err=>console.log(err))  
  //  fetch(`https://www.omdbapi.com/?apikey=6e30c4b4&y=${year}`)
  //     .then(res => res.json()) 
  //     .then(data => setData(data.year)) 
  //     .catch(err=>console.log(err)) 
  //  fetch(`https://www.omdbapi.com/?apikey=6e30c4b4&type=${type}`)
  //  .then(res => res.json()) 
  //  .then(data => setData(data.type)) 
  //  .catch(err=>console.log(err))
}
   

  return (
    <div style={{backgroundColor:'#f2ffff'}}>
      <form className='p-4 m-4 border border-success '>
        <div className="form-group">
          <label >search :</label>
          <input type='text'class="form-control" value={search} onChange={(e)=>setsearch(e.target.value)} placeholder="search"/>
        </div>

        <div className="form-group">
          <label >type :</label>
          <input type="text" class="form-control" value={type} onChange={(e)=>settype(e.target.value)} placeholder="type"/>
        </div>

        <div className="form-group">
          <label >Year :</label>
          <input type="text" class="form-control" value={year} onChange={(e)=>setyear(e.target.value)} placeholder="Year"/>
        </div>

        <button type="button" onClick={click} className="btn btn-success m-2">Search</button>
      </form>
      <div className='row'>
      {
        data.map((i)=>(
            <div className="card p-4 m-4 border border-success" key={i.imdbID} style={{width: '18rem'}}>
              <img className="card-img-top" src={i.Poster} alt={i.Title}/>
              <div className="card-body">
                <h5 className="card-title">{i.Title}</h5>
                <p className="card-text">{i.Year}</p>
              </div>
            </div>
        ))
      }
      </div>
    </div>
  )
}


import React ,{ useEffect, useState }from 'react';
import axios from 'axios';

function DropdownItem2() {
  let [usnews, setUsnews] = useState([])

  

  useEffect(()=>{
          axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=e7d8d2601f1b4cd7bfe450b4543cc9be").then((res) => {
            console.log(res.data.articles)
            setUsnews(res.data.articles)
          })
        }, [])
  return (
    <>
    <div className='container my-5'>
    <div className='row text-center'>

        {usnews.map((val) => {

            return (
                <div className='col-4 my-2'>
                    <div className="card  h-100" style={{ width: "18rem" }}>
                        <img src={val.urlToImage} className="card-img-top" alt="IMAGES NOT FOUND" />
                        <div className="card-body">
                            <h5 className="card-title">{val.title}</h5>
                            <p className="card-text">{val.description}</p>
                            
                            <a href={val.url} className="btn btn-primary">Read Full Article</a>
                        </div>
                    </div>
                </div>
            )
        })}


    </div>
</div>

</>
  )
}

export default DropdownItem2

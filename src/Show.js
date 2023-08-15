import React from 'react';


function Show({ news }) {

    return (
        <>
      
     
            <div className='container my-5'>
                <div className='row text-center'>

                    {news.map((val) => {

                        return (
                            <div className='col-4 my-2'>
                                <div className="card h-100" style={{ width: "20rem" }} >
                                    <img src={val.urlToImage} className="card-img-top" alt="IMAGES NOT FOUND" />
                                    <div className="card-body">
                                        <h5 className="card-title">{val.author}</h5>
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

export default Show

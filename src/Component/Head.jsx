import React from "react";



const Head=(props)=>{
    return(
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-sm-12">
                <div className="card">
                    <div className="card-body">
                    <p className="h4 text-primary">{props.title}</p>
                      <p className="card-text">{props.text}</p>  
                    </div>
                </div>                    
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Head;
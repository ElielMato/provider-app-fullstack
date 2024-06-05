import React from 'react'

export const Card = (props) => {
  return (
    <>
        <div className="card" style={{ width: "15rem" }}>
            <img src={require(`../img/${props.img}`) } 
                  class="card-img-top" alt="..." 
                  style={{height:"235px", width: "235px"}}  
            />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
            </div>
        </div>
    </>
  )
}

import React from "react";


export default function OptionSelection({ arrayItems, selectOption }) {
  return (
    <>

      
    <div className="heading">AI APP</div>
      
      <p className="heading-paragp">Explore what's possible with some example applications</p>

      <div className="grid-main">
        {arrayItems.map((item) => {
                return( 
                  
                <div className='grid-child' onClick={ () => selectOption(item.option)}>
                  
                  <div className='svgitm'>
                    { item.svg }
                  </div>

                  <div className='name-and-descr'>
                    <h3>{  item.name }</h3>
                    <div className="option-paragp">{  item.description  }</div>
                  </div>
                  
                </div>
                );
            })}
        </div>
    </>
  )
}



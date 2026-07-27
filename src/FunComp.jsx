import React from 'react'

import moduleCss from './styles.module.css'
export default function FunComp() {

    let internalCss = {
        btn:{
            backgroundColor:'orangered',
            color:'purple',
            padding:'5px 10px',
            borderRadius:'10px',
            broder:'none',
        }
,
        p:{
            color:'blue'
        }
    }
  return (
    <div>

        {/* 
            inline
            internal
            external
            moduleCss        
        */}
            
            {/* inlineCss */}
            {/* style={{backgroundColor :''}} */}
            <center>
                <button 
                style={
                    {   backgroundColor:'blueviolet', 
                        padding:'5px 15px' , 
                        borderRadius:'10px'
                        }}
                        >inline</button>

                        {/* internalCss componentCss */}

                        <button style={internalCss.btn}>InternalCss</button>

                        {/* 
                        external
                        */}

                        <button className='btnexternal'>ExternalCss</button>

                        {/* 
                        ModuleCss
                        */}

                        <button className={moduleCss.modCss}>ModuleCss</button>
                     
            </center>


      
    </div>
  )
}

import React, {useState} from 'react'

export default function Hook() {
    let [name,setName]=useState("ram")

    
        return (
            <div>
                <h1 onMouseOver={()=> setName({name:"tharun"})}
                onMouseDown={()=>setName("tharun is a good boy")}
                >
                    {name}

                </h1>
                
            </div>
        )
    
}


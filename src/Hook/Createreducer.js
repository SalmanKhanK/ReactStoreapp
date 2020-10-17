
import React from 'react';
const reducer=((state,action)=>{
    switch(action.type){
        case "Add":
            console.log(state ,"State")
             return [action.payload,...state]
        case "Delete":{
            let array=state.filter((ev)=>ev.id!=action.payload.id)
            console.log(array);
            return array;
        }
        case "update":{
            let array=state.findIndex(ev=>ev.id===action.payload.id);
            state[array]=action.payload;
            return state;
        }
    
        
    }
})
export default reducer;
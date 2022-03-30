import React  from "react";
//   import { ReactDOM } from "react";
function showdate(){
    let newDate = new Date()
    // let date = newDate.getDate();
    const date = `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`;
     return(

       <>
           <div className="footer">
               <h5>@CopyRight: {date}</h5>
                       </div>
       </>
     )
}
 export default showdate;
 
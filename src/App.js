//import logo from './logo.svg';
import './App.css';
import  Navbar from './Navbar';
import Employeedetails from './Employeedetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Edata from './Edata';
import Footer from './Footer'
 
 
 function Showdata(val){
 
return(
  
  <>
  
   <div >
   

     <Employeedetails
        imagesrc= {val.image}
       name={val.name}
        designation={val.designation}
          dob={val.dob}/>
    
    </div>
     
  </>
  
  
)
    
 }


function App( ) {
   
  return (

    <div >
     <div className='homepage'>
     <Navbar/>

<div className='cardstyle' style={{display:'flex'}}>
{Edata.map(Showdata)}

</div>
<Footer/>
</div>

     </div>
     
    
  );
}

export default App;

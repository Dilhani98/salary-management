import  { useState } from "react";
import "./Salarysheet.css";

import Axios from "axios";


function Salarysheet (){

    const[name, setName] = useState("");
    const[salary,setSalary]=useState("");
    const[deduction, setDeduction] = useState("");
    const[allowances, setAllowances] = useState("")
    
    const addEmployee = () =>{
        console.log("hi");
         Axios.post('http://localhost:3000/client' ,
         {
            
             name:name,
             salary:salary,
             deduction:deduction,
             allowances:allowances,
             
            }).then(() => {
                console.log("success");
            });
    };
        
        return(
        
        <div className="App" >
            <h2 style={{backgroundColor: "lightblue"}}>Add Salary Details</h2>
            <div className="information">
               
     
               <label>Employee name</label>
                <input type="text"placeholder="full name" required
                 onChange={(event) =>
                    {setName(event.target.value)} 
                 }
                />
    
                <label>Basic Salary</label>
                <input type="number"placeholder="Basic Salary" required
                onChange={(event) =>
                    {setSalary(event.target.value)} 
                 }
                />

 
                <label>Tax Deduction</label>
                <input type="number" placeholder="Tax Deduction" required 
                onChange={(event) =>
                    {setDeduction(event.target.value)} 
                 }
                />

                <label>Allowances</label>
                <input type="number" placeholder="Allowances" required 
                onChange={(event) =>
                    {setAllowances(event.target.value)} 
                 }
                />
         
                <button type="submit" onClick={addEmployee}>Submit</button>
                
                <button type="reset" >cancel </button>
            
                
            </div>
        </div>
    )
}
 export default Salarysheet;
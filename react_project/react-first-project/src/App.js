import { Route,Routes } from "react-router-dom"
import GATEPASS  from "./gate_pass"
import Student_address_details from "./student_address_details"
import StudentRegistrationForm from "./studentregistration"



const App = () => {
  return(
    <>
        <Routes>
         <Route path='/' element={<GATEPASS/>} />
         <Route path='/student_address_details' element={<Student_address_details/>} />
         <Route path='/studentregistration' element={<StudentRegistrationForm/>} />        
       </Routes>
    </>
  );
};

export default App;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"


const GATEPASS = () => {
    const [formData, setFormData] = useState({
    gp_pass_id: '',
    gp_pass_type: '' ,
    gp_student_id:'' ,
    gp_pass_date: '' ,
    gp_pass_time: '',
    gp_destination:''  ,
    gp_purpose:''  ,
    gp_issued_by:'' 
    });



    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const db = function (path) {
        debugger;
        // let res = axios({
        //     headers: {
        //         'Content-Type' : 'application/json; charset=UTF-8'
        //     },
        //     method: "POST",
        //     url:"http://127.0.0.1:8000/studentregistration",
        //     data:formData
        //   });
        //   res.then(x => console.log(x.data), x => console.log(x.data));

     const result = axios
    .post(
      "http://127.0.0.1:8000/React_Project/react-first-project/src/gate_pass",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result.then(x => console.log(x));
}

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation
        const newErrors = {};
        // Example validation - Check if required fields are empty
        // Add your validation logic here

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Form is valid, submit data or perform further actions
            console.log(formData);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ width: '80%', maxWidth: '500px' }}>
                <div>
                    <label>gp_pass_id:</label>
                    <input type="text" name="gp_pass_id" value={formData.gp_pass_id} onChange={handleChange} />
                    {errors.gp_pass_id&& <span>{errors.gp_pass_id}</span>}
                </div>
                <div>
                    <label>gp_pass_type:</label>
                    <input type="text" name="gp_pass_type" value={formData.gp_pass_type} onChange={handleChange} />
                    {errors.gp_pass_type && <span>{errors.gp_pass_type}</span>}
                </div>
                <div>
                    <label>gp_student_id:</label>
                    <input type="text" name="gp_student_id" value={formData.gp_student_id} onChange={handleChange} />
                    {errors.gp_student_id && <span>{errors.gp_student_id}</span>}
                </div>
                <div>
                    <label>gp_pass_date:</label>
                    <input type="text" name="gp_pass_date" value={formData.gp_pass_date} onChange={handleChange} />
                    {errors.gp_pass_date && <span>{errors.gp_pass_date}</span>}
                </div>
                <div>
                    <label>gp_pass_time:</label>
                    <input type="text" name="gp_pass_time" value={formData.gp_pass_time} onChange={handleChange} />
                    {errors.gp_pass_time && <span>{errors.gp_pass_time}</span>}
                </div>
                <div>
                    <label>gp_destination:</label>
                    <input type="text" name="sr_state" value={formData.gp_destination} onChange={handleChange} />
                    {errors.gp_destination && <span>{errors.gp_destination}</span>}
                </div>
                <div>
                    <label>gp_purpose:</label>
                    <input type="text" name="gp_purpose" value={formData.gp_purpose} onChange={handleChange} />
                    {errors.gp_purpose && <span>{errors.gp_purpose}</span>}
                </div>
                <div>
                    <label>gp_issued_by:</label>
                    <input type="text" name="gp_issued_by" value={formData.gp_issued_by} onChange={handleChange} />
                    {errors.gp_issued_by && <span>{errors.gp_issued_by}</span>}
                </div>
                
                
                
                <button type="button" onClick={() => db('/student_address_details')}>Submit</button>
            </form>
        </div>
    );
};

export default GATEPASS;

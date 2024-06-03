import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"


const StudentRegistrationForm = () => {
    const [formData, setFormData] = useState({
        sr_first_name:   '',
        sr_last_name: '',
        sr_phone_no: '',
        sr_country: '',
        sr_city: '',
        sr_state: '', 
        sr_fee_type_id: '',
        sr_program_applied: '',
        sr_course_applied: '',
        sr_application_status: '',
        sr_application_date: '',
        sr_admission_date: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newErrors = {};
        
        
        console.log(formData);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Form is valid, submit data or perform further actions
            console.log(formData);
        }
    };

    const db = function (path) {
        // let res = axios({
        //     headers: {
        //         'Content-Type' : 'application/json; charset=UTF-8'
        //     },
        //     method: "POST",
        //     url:"http://127.0.0.1:8000/studentregistration",
        //     data:formData
        //   });
        //   res.then(x => console.log(x.data), x => console.log(x.data));

        axios
    .post(
      "http://127.0.0.1:8000/studentregistration",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response);
    });

          navigate(path);
    }



    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ width: '80%', maxWidth: '500px' }}>
                <div >
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>First Name:</label>
                    <input type="text" width="50%" name="sr_first_name" value={formData.sr_first_name} onChange={handleChange} />
                    {errors.sr_first_name && <span>{errors.sr_first_name}</span>}
                </div>
                <div  >
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>Last Name:</label>
                    <input type="text" width="50%" name="sr_last_name" value={formData.sr_last_name} onChange={handleChange} />
                    {errors.sr_last_name && <span>{errors.sr_last_name}</span>}
                </div>
                <div >
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}} >Phone No:</label>
                    <input type="text" width="50%" name="sr_phone_no" value={formData.sr_phone_no} onChange={handleChange} />
                    {errors.sr_phone_no && <span>{errors.sr_phone_no}</span>}
                </div>
                <div  >
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>Country:</label>
                    <input type="text" name="sr_country" value={formData.sr_country} onChange={handleChange} />
                    {errors.sr_country && <span>{errors.sr_country}</span>}
                </div>
                <div   >
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>City:</label>
                    <input type="text" name="sr_city" value={formData.sr_city} onChange={handleChange} />
                    {errors.sr_city && <span>{errors.sr_city}</span>}
                </div>
                <div >
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>State:</label>
                    <input type="text" name="sr_state" value={formData.sr_state} onChange={handleChange} />
                    {errors.sr_state && <span>{errors.sr_state}</span>}
                </div>
                <div >
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>Fee Type ID:</label>
                    <input type="text" name="sr_fee_type_id" value={formData.sr_fee_type_id} onChange={handleChange} />
                    {errors.sr_fee_type_id && <span>{errors.sr_fee_type_id}</span>}
                </div>
                <div >
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>Program Applied:</label>
                    <input type="text" name="sr_program_applied" value={formData.sr_program_applied} onChange={handleChange} />
                    {errors.sr_program_applied && <span>{errors.sr_program_applied}</span>}
                </div>
                <div >
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>Course Applied:</label>
                    <input type="text" name="sr_course_applied" value={formData.sr_course_applied} onChange={handleChange} />
                    {errors.sr_course_applied && <span>{errors.sr_course_applied}</span>}
                </div>
                <div >
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>Application Status:</label>
                    <input type="text" name="sr_application_status" value={formData.sr_application_status} onChange={handleChange} />
                    {errors.sr_application_status && <span>{errors.sr_application_status}</span>}
                </div>
                <div >
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>Application Date:</label>
                    <input type="text" name="sr_application_date" value={formData.sr_application_date} onChange={handleChange} />
                    {errors.sr_application_date && <span>{errors.sr_application_date}</span>}
                </div>
                <div >
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>Admission Date:</label>
                    <input type="text" name="sr_admission_date" value={formData.sr_admission_date} onChange={handleChange} />
                    {errors.sr_admission_date && <span>{errors.sr_admission_date}</span>}
                </div>
                <div style={{marginTop:'2rem',textAlign:'center'}}>
                <button type="button" onClick={() => db('/student_address_details')}>Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default StudentRegistrationForm;

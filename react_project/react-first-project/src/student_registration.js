import React, { useState } from 'react';

const StudentRegistrationForm = () => {
    const [formData, setFormData] = useState({
    sd_id:'' ,
    sd_student_code:'',
    sd_first_name:'',
    sd_last_name:'',
    sd_date_of_birth:'',
    sd_gender:'',
    sd_email:'',
    sd_phone_no:'',
    sd_city:'',
    sd_semester:'',
    sd_branch_name:''
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
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>sd_id:</label>
                    <input type="text" name="sd_id" value={formData.sd_id} onChange={handleChange} />
                    {errors.sd_id && <span>{errors.sd_id}</span>}
                </div>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>sd_student_code:</label>
                    <input type="text" name="sd_student_code" value={formData.sd_student_code} onChange={handleChange} />
                    {errors.sd_student_code && <span>{errors.sd_student_code}</span>}
                </div>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>sd_first_name:</label>
                    <input type="text" name="sr_phone_no" value={formData.sd_first_name} onChange={handleChange} />
                    {errors.sd_first_name && <span>{errors.sd_first_name}</span>}
                </div>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>sd_last_name:</label>
                    <input type="text" name="sr_country" value={formData.sd_last_name} onChange={handleChange} />
                    {errors.sd_last_name && <span>{errors.sd_last_name}</span>}
                </div>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>sd_date_of_birth:</label>
                    <input type="text" name="sr_city" value={formData.sd_date_of_birth} onChange={handleChange} />
                    {errors.sd_date_of_birth && <span>{errors.sd_date_of_birth}</span>}
                </div>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>sd_gender:</label>
                    <input type="text" name="sr_state" value={formData.sd_gender} onChange={handleChange} />
                    {errors.sd_gender && <span>{errors.sd_gender}</span>}
                </div>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>sd_email:</label>
                    <input type="text" name="sr_fee_type_id" value={formData.sd_email} onChange={handleChange} />
                    {errors.sd_email && <span>{errors.sd_email}</span>}
                </div>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>sd_phone_no:</label>
                    <input type="text" name="sr_program_applied" value={formData.sd_phone_no} onChange={handleChange} />
                    {errors.sd_phone_no && <span>{errors.sd_phone_no}</span>}
                </div>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>sd_city:</label>
                    <input type="text" name="sr_course_applied" value={formData.sd_city} onChange={handleChange} />
                    {errors.sd_city && <span>{errors.sd_city}</span>}
                </div>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>sd_semester:</label>
                    <input type="text" name="sr_application_status" value={formData.sd_semester} onChange={handleChange} />
                    {errors.sd_semester && <span>{errors.sd_semester}</span>}
                </div>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>sd_branch_name:</label>
                    <input type="text" name="sr_application_date" value={formData.sd_branch_name} onChange={handleChange} />
                    {errors.sd_branch_name && <span>{errors.sd_branch_name}</span>}
                </div>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default StudentRegistrationForm;

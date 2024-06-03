import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Student_address_details = () => {
    const [formData, setFormData] = useState({
        stad_address_id:'' ,
        stad_student_id:''  ,
        stad_address_type:'' ,
        stad_address:'' ,
        stad_city:'' ,
        stad_state:'' ,
        stad_country:'' ,
        stad_zip_code:''  
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

    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ width: '80%', maxWidth: '500px' }}>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>stad_address_id:</label>
                    <input type="text" name="stad_address_id" value={formData.stad_address_id} onChange={handleChange} />
                    {errors.stad_address_id && <span>{errors.stad_address_id}</span>}
                </div>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>stad_student_id:</label>
                    <input type="text" name="stad_student_id" value={formData.stad_student_id} onChange={handleChange} />
                    {errors.stad_student_id && <span>{errors.stad_student_id}</span>}
                </div>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>stad_address_type:</label>
                    <input type="text" name="stad_address_type" value={formData.stad_address_type} onChange={handleChange} />
                    {errors.stad_address_type && <span>{errors.stad_address_type}</span>}
                </div>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>stad_address:</label>
                    <input type="text" name="stad_address" value={formData.stad_address} onChange={handleChange} />
                    {errors.stad_address && <span>{errors.stad_address}</span>}
                </div>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>stad_city:</label>
                    <input type="text" name="stad_city" value={formData.stad_city} onChange={handleChange} />
                    {errors.stad_city && <span>{errors.stad_city}</span>}
                </div>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>stad_state:</label>
                    <input type="text" name="stad_state" value={formData.stad_state} onChange={handleChange} />
                    {errors.stad_state && <span>{errors.stad_state}</span>}
                </div>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>stad_country:</label>
                    <input type="text" name="stad_country" value={formData.stad_country} onChange={handleChange} />
                    {errors.stad_country && <span>{errors.stad_country}</span>}
                </div>
                <div>
                    <label style={{display:'inline-block',textAlign:'right',width:'50%'}}>stad_zip_code:</label>
                    <input type="text" name="stad_zip_code" value={formData.stad_zip_code} onChange={handleChange} />
                    {errors.stad_zip_code && <span>{errors.stad_zip_code}</span>}
                </div>
                
                
        
                <button onClick={() => {navigate('/gate_pass')}} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Student_address_details;

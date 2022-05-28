import React from 'react';
import { useState } from 'react';

const Form = () =>  {
    const [form , setForm] = useState({
     
    //  username:"",
    //  email:"",
    //  password:"",
    //  age:"",
    //  isIndian:false,
    //  gender:"",
    
    });
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }
    

    const handeOnChange = (e) => {
        let {name , value,checked ,type ,files} = e.target;
        // console.log(type,name,value,checked);
        if(type==="checkbox"){
            setForm({
                ...form,
                [name]:checked,
            })
        }
        else if(type==="file"){
                  setForm({
                      ...form,
                      [name]:files,
                  })
        }else{
            setForm({
            ...form,
            [name]:value,
            });
        }
    };

    return (
        <div>
            FORM
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text"
                    name="username"
                    placeholder='Enter Name'
                    value={form.username}
                    onChange={handeOnChange}
                    />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email"
                    name="email"
                    placeholder='Enter Email'
                    value={form.email}
                    onChange={handeOnChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"
                    name="password"
                    placeholder='Set your password'
                    value={form.password}
                    onChange={handeOnChange}
                    />
                </div>
                <div>
                    <label>Age</label>
                    <input type="text"
                    name="age"
                    placeholder='Enter Age'
                    value={form.age}
                    onChange={handeOnChange}
                    />
                </div>
                <div>
                    <label>Marital Status</label>
                    <select
                    name="status"
                    value={form.status}
                    onChange={handeOnChange}
                    >
                            {form.status && <option value=""></option>}
                            <option value="Married">Married</option>
                            <option value=" Unmarried">Unmarried</option>
                    </select>
                </div>
                 <div>
                    <input
                    type="checkbox"
                    name="isIndian"
                    checked={form.isIndian}
                    onChange={handeOnChange}
                    />
                    <label>Indian</label>
                    </div>
                            
                  <div>
                    <label> FILE:   </label>
                    <input type="file"
                    name="resume"
                    accept=".pdf"
                    placeholder='upload Your resume only pdf formete'
                    file={form.resume}
                    onChange={handeOnChange} />
                </div>

                <div>
                   
                    <input 
                    type="radio" 
                    name="gender"
                    value={"Male"}
                    onChange={handeOnChange}
                    />
                     <label>Male</label>
                     <input 
                    type="radio" 
                    name="gender"
                    value={"Female"}
                    onChange={handeOnChange}
                    />
                    <label>Female</label>
                    <label>:Gender</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Form

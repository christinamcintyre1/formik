import './App.css';
import {useFormik} from 'formik';
function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert("Login Successful");
  },
  validate: values => {
    let errors = {};
    if(!values.name) errors.name = 'Field required';
    if(!values.email) errors.email = 'Field required';
    if(!values.password) errors.password = 'Field required';
    return errors;
    }
  });
  return (
    <div>
     <form onSubmit={formik.handleSubmit}>
       <div>Name</div>
        <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div> : null}
        <div>Email</div>
        <input id ="emailField" 
        type="text"
         name="email"
          onChange={formik.handleChange} 
          value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color: 'red'}}>{formik.errors.email}</div> : null}

        <div>Password</div>
        <input
         type="text" 
         name="password"
          onChange={formik.handleChange} 
          value={formik.values.password}/>
        {formik.errors.password ? <div id="pswField" style={{color: 'red'}}>{formik.errors.password}</div> : null}
        <button id="submitBtn" type="submit">Submit</button>
       </form>  
         </div>
  );
}

export default App;

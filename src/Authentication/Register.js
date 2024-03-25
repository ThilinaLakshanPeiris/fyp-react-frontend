import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

    const [id, idchange] = useState("");
    const [fname, fnamechange] = useState("");
    const [lname, lnamechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    // const [country, countrychange] = useState("india");
    // const [address, addresschange] = useState("");
    const [gender, genderchange] = useState("female");

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if ((fname === null || fname === '') && (lname === null || lname === '')) {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
            e.preventDefault();
            let regobj = {
                "username": id,
                "password": password,
                "password2": password,
                "email": email,
                "first_name": fname,
                "last_name": lname
            };

            if (IsValidate()) {
            console.log(regobj);
            const url = 'http://127.0.0.1:8000/WebApp/register/';
            // const url = 'http://localhost:3000';
            fetch(url, {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate('/login');
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }
    }
    return (
        <div>
            <div className="signup-container-main d-flex justify-content-center align-items-center">
        <form
          onSubmit={handlesubmit}
          className="row justify-content-center pt-4 pb-4 shadow-lg rounded-4 w-50"
        >
          <div
            className="text-center fs-1 fw-semibold"
            style={{ color: "blue" }}
          >
            User Registration
          </div>
          <div className="row justify-content-evenly mt-3">
            <div className="col-md-5 mt-2 mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                value={fname}
                onChange={(e) => fnamechange(e.target.value)}
              />
            </div>
            <div className="col-md-5 mt-2 mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                value={lname}
                onChange={(e) => lnamechange(e.target.value)}
              />
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-md-4 mt-2 mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={id}
                onChange={(e) => idchange(e.target.value)}
              />
            </div>
            <div className="col-md-6 mt-2 mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => emailchange(e.target.value)}
              />
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-md-5 mt-2 mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => passwordchange(e.target.value)}
              />
            </div>
            <div className="col-md-5 mt-2 mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={(e) => phonechange(e.target.value)}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="gender"
                checked={gender === "male"}
                onChange={(e) => genderchange(e.target.value)}
                value="male"
              />
              <label className="form-check-label" for="inlineCheckbox1">
                Male
              </label>
            </div>
            <div className="col-md-3 form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                checked={gender === "female"}
                onChange={(e) => genderchange(e.target.value)}
                name="gender"
                value="female"
              />
              <label className="form-check-label" for="inlineCheckbox2">
                Female
              </label>
            </div>
          </div>
          <div className="col-md-8 row justify-content-around mt-4">
            <button className="register-btn col-md-4" type="submit">
              Register
            </button>
            <Link
              className="cancel-btn text-center col-md-4 text-decoration-none"
              to={"/login"}
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>

        </div>
    );
}

export default Register;
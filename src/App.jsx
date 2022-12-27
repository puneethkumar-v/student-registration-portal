import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import StudentForm from "./components/StudentForm";
import StudentInfo from "./components/StudentInfo";
import { Route, Routes } from "react-router";
import * as yup from "yup";

function App() {
  const [arrayOfStudents, setArrayOfStudents] = useState([]);
  const handleFormSubmit = async (values, { resetForm }) => {
    setArrayOfStudents([...arrayOfStudents, values]);
    console.log(values);
    resetForm({ values: initialValues });
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    country: yup.string().required("required"),
    state: yup.string().required("required"),
    city: yup.string().required("required"),
    zip: yup.string().required("required"),
    address: yup.string().required("required"),
    contact_number: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
  });
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    address: "",
    contact_number: "",
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <StudentForm
              handleFormSubmit={handleFormSubmit}
              initialValues={initialValues}
              checkoutSchema={checkoutSchema}
              arrayOfStudents={arrayOfStudents}
              setArrayOfStudents={setArrayOfStudents}
            />
          }
        />
        <Route
          path="/display"
          element={<StudentInfo rows={arrayOfStudents} />}
        />
      </Routes>
    </div>
  );
}

export default App;

import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";

import React from "react";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import StudentInfo from "./StudentInfo";
// import CircularProgress from "@material-ui/core/CircularProgress";

const StudentForm = ({
  handleFormSubmit,
  initialValues,
  checkoutSchema,
  arrayOfStudents,
  setArrayOfStudents,
}) => {
  const isNonMobile = useMediaQuery("(min-width:650px)");

  const [loading, setLoading] = useState(false);

  return (
    <Box m="20px" sx={{ height: isNonMobile ? "90vh" : "100%" }}>
      <Box
        m="20px"
        sx={{
          height: isNonMobile ? "80vh" : "100%",
        }}
      >
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                boxShadow: isNonMobile
                  ? "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
                  : null,
                maxWidth: "40rem",
                margin: "0 auto",
                padding: isNonMobile ? "2rem" : null,
                borderRadius: "6px",
              }}
            >
              <Typography variant={isNonMobile ? "h3" : "h4"} mb="2rem">
                REGISTRATION FORM
              </Typography>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="email"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Country"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.country}
                  name="country"
                  error={!!touched.country && !!errors.country}
                  helperText={touched.country && errors.country}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="State"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.state}
                  name="state"
                  error={!!touched.state && !!errors.state}
                  helperText={touched.state && errors.state}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="City"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.city}
                  name="city"
                  error={!!touched.city && !!errors.city}
                  helperText={touched.city && errors.city}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Zip"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.zip}
                  name="zip"
                  error={!!touched.zip && !!errors.zip}
                  helperText={touched.zip && errors.zip}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="textarea"
                  label="Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                  name="address"
                  error={!!touched.address && !!errors.address}
                  helperText={touched.address && errors.address}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="tel"
                  label="contact_number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact_number}
                  name="contact_number"
                  error={!!touched.contact_number && !!errors.contact_number}
                  helperText={touched.contact_number && errors.contact_number}
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt="20px"
              >
                {loading ? (
                  // <CircularProgress />
                  "loading"
                ) : (
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{
                      padding: isNonMobile ? "10px 20px" : null,
                      width: "100%",
                      fontSize: isNonMobile ? "16px" : null,
                      letterSpacing: "0.15rem",
                      fontWeight: "bold",
                    }}
                  >
                    ADD STUDENT
                  </Button>
                )}
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default StudentForm;

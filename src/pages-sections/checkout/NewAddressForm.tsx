import React, { FC, Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const checkoutSchema = yup.object({
  street2: yup.string(),
  name: yup.string().required("required"),
  street1: yup.string().required("required"),
  phone: yup.number().required("required"),
  city: yup.string().required("required"),
  state: yup.string().required("required"),
  country: yup.string().required("required"),
  zip: yup.number().required("required"),
});

const initialValues: { [k: string]: any } = {
  name: "UI Lib",
  street1: "321, Subid Bazaar",
  street2: "",
  phone: "01789123456",
  city: "Sylhet",
  state: "Sylhet",
  country: "Bangladesh",
  zip: 4336,
};

// ==================================================================
type NewAddressFormProps = {
  setNewAddress: (value: any) => void;
};
// ==================================================================

const NewAddressForm: FC<NewAddressFormProps> = ({ setNewAddress }) => {
  const [addCardForm, setAddCardForm] = useState<boolean>(false);

  const { handleChange, handleSubmit, errors, touched, values } = useFormik({
    initialValues: initialValues,
    validationSchema: checkoutSchema,
    onSubmit: (values, { resetForm }) => {
      setNewAddress(values);

      if (values) {
        setAddCardForm(false);
        resetForm(initialValues);
      }
    },
  });

  return (
    <Fragment>
      <Button
        color="primary"
        variant="outlined"
        sx={{ p: "2px 20px" }}
        onClick={() =>
          addCardForm ? setAddCardForm(false) : setAddCardForm(true)
        }
      >
        Add New Address
      </Button>

      <Dialog open={addCardForm} onClose={() => setAddCardForm(false)}>
        <DialogContent>
          <Typography variant="h6" mb={3}>
            Add New Address Information
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="name"
                  value={values.name}
                  label="Enter Your Name"
                  onChange={handleChange}
                  helperText={(touched.name && errors.name) as string}
                  error={touched.name && Boolean(errors.name)}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="street1"
                  label="Street line 1"
                  value={values.street1}
                  onChange={handleChange}
                  helperText={(touched.street1 && errors.street1) as string}
                  error={touched.street1 && Boolean(errors.street1)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="street2"
                  label="Address line 2"
                  value={values.street2}
                  onChange={handleChange}
                  helperText={(touched.street2 && errors.street2) as string}
                  error={touched.street2 && Boolean(errors.street2)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  label="Enter Your Phone"
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={(touched.phone && errors.phone) as string}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="city"
                  label="City"
                  value={values.city}
                  onChange={handleChange}
                  helperText={(touched.city && errors.city) as string}
                  error={touched.city && Boolean(errors.city)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="state"
                  label="State"
                  value={values.state}
                  onChange={handleChange}
                  helperText={(touched.state && errors.state) as string}
                  error={touched.state && Boolean(errors.state)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="zip"
                  label="Zip"
                  type="number"
                  value={values.zip}
                  onChange={handleChange}
                  helperText={(touched.zip && errors.zip) as string}
                  error={touched.zip && Boolean(errors.zip)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="country"
                  label="Country"
                  value={values.country}
                  onChange={handleChange}
                  helperText={(touched.country && errors.country) as string}
                  error={touched.country && Boolean(errors.country)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Button color="primary" variant="contained" type="submit">
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default NewAddressForm;

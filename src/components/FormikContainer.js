import React from 'react'
import  {Formik, Form, Field} from "formik"
import * as Yup from "yup"
import FormikControl from "./FormikControl"
function FormikContainer() {

const dropDownOptions = [
{key: "Select an option", value: ""},
{key: "Option 1", value: "Option 1"},
{key: "Option 2", value: "Option 2"},
{key: "Option 3", value: "Option 3"},

]

const radioOptions = [
{key: "Select an option", value: ""},
{key: "Option 1", value: "rOption 1"},
{key: "Option 2", value: "rOption 2"},
{key: "Option 3", value: "rOption 3"},

]

const checkboxoptions = [
{key: "Select an option", value: ""},
{key: "Option 1", value: "cOption 1"},
{key: "Option 2", value: "cOption 2"},
{key: "Option 3", value: "cOption 3"},

]


const initialValues = {
 email: "",
description: "",
selectOption: "",
radioOption:"",
checkboxOption:[],
birthDate: null
}
const validationSchema = Yup.object({
 email: Yup.string("Invalid E-mail format").required("Required"),
 description: Yup.string().required("Required"),
 selectOption: Yup.string().required("Required"),
 radioOption: Yup.string().required("Required"),
checkboxOption: Yup.array().required("Required!"),
birthDate: Yup.date().required("Required!").nullable()
})
const onSubmit = (values)=> console.log(values)


 return (
  <div>
   
<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
{
formik => <Form>
<FormikControl
 control="input"
  type="email"
  label="email"
  name="email"/>

<FormikControl
 control="textarea"
  type="description"
  label="description"
  name="description"/>

<FormikControl
 control="select"
  label="Select a topic"
  name="selectOption"
  options={dropDownOptions}
  />


<FormikControl
 control="radio"
  label="Radio Topic"
  name="radioOption"
  options={radioOptions}
  />

  <FormikControl
 control="checkbox"
  label="Checkbox Topics"
  name="checkboxOption"
  options={checkboxoptions}
  />


<FormikControl
 control="date"
  label="Pick a Date"
  name="birthDate"/>



<button type="submit">Submit</button>
</Form>
}
</Formik>

  </div>
 )
}

export default FormikContainer

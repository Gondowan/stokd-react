import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderHobbies = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>
        Add category
      </button>
    </li>
    {fields.map((category, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Category"
          onClick={() => fields.remove(index)}
        />
        <Field
          name={category}
          type="text"
          component={renderField}
          label={`Hobby #${index + 1}`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
)

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add category
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((category, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove category"
          onClick={() => fields.remove(index)}
        />
        <h4>category #{index + 1}</h4>
        <Field
          name={`${category}.firstName`}
          type="text"
          component={renderField}
          label="category title"
        />
        <Field
          name={`${category}.lastName`}
          type="text"
          component={renderField}
          label="Last Name"
        />
        <FieldArray name={`${category}.hobbies`} component={renderHobbies} />
      </li>
    ))}
  </ul>
)

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="category.name"
        type="text"
        component={renderField}
        label="Categories"
      />
      <FieldArray name="members" component={renderMembers} />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldArrays', // a unique identifier for this form
  validate
})(FieldArraysForm)
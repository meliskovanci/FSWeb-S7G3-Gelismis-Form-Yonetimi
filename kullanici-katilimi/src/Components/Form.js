import React from "react";


function Form(props) {
  const { formValues, setFormValues, disabled, validate, formErrors, submit } = props;

  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    validate(name, valueToUse);
    setFormValues({ ...formValues, [name]: valueToUse });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <label htmlFor="firstname">First Name:</label>
      <input id="firstname" data-cy="firstname" type="text" name="firstname" value={formValues.firstname} onChange={onChange} />
      <div id="firstname-error" className="errors">
        {formErrors.firstname}
      </div>
      <label htmlFor="lastname">Last Name:</label>
      <input id="lastname" data-cy="lastname" type="text" name="lastname" value={formValues.lastname} onChange={onChange} />
      <div id="lastname-error" className="errors">
        {formErrors.lastname}
      </div>
      <label htmlFor="email">Email:</label>
      <input id="email" data-cy="email" type="email" name="email" value={formValues.email} onChange={onChange} />
      <div id="email-error" className="errors">
        {formErrors.email}
      </div>
      <label htmlFor="password">Password:</label>
      <input id="password" data-cy="password" type="password" name="password" value={formValues.password} onChange={onChange} />
      <div id="password-error" className="errors">
        {formErrors.password}
      </div>
      <label htmlFor="terms">Agree To Terms Of Service:</label>
      <input id="terms" data-cy="terms" type="checkbox" name="termsOfService" value={formValues.termsOfService} onChange={onChange} />
      <button id="create-user" disabled={disabled}>
        Create User
      </button>
    </form>
  );
}

export default Form;





    
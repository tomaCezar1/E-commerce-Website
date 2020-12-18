import { useState } from "react"
import Link from "next/link"
import InputMask from 'react-input-mask';

const initialValues = {
  name: '',
  phone: '',
  callTime: ''
}

export default function CheckoutForm({validate}): JSX.Element {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (event) => {
    const { name, value: newValue, type } = event.target;
    // Keep phone field as numbers
    const value = type === "number" ? +newValue : newValue;
    setValues({
      ...values,
      [name]: value
    });
    setTouched({
      ...touched,
      [name]: true
    });
  }

  const handleBlur = event => {
    const { name, value } = event.target;

    const { [name]: removedError, ...rest } = errors;

    const error = validate[name](value);

    // // validate the field if the value has been touched
    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error })
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        const newError = validate[key](values[key]);
        const newTouched = { [key]: true };
        return {
          errors: {
            ...acc.errors,
            ...(newError && { [key]: newError })
          },
          touched: {
            ...acc.touched,
            ...newTouched
          }
        };
      },
      {
        errors: { ...errors },
        touched: { ...touched }
      }
    );
    setErrors(formValidation.errors);
    setTouched(formValidation.touched);

    if (
      !Object.values(formValidation.errors).length && // Errors object is empty
      Object.values(formValidation.touched).length ===
        Object.values(values).length && // All fields were touched
      Object.values(formValidation.touched).every(t => t === true) // Every touched field is true
    ) {

      // Make the request to place an order instead of the alert
      alert(JSON.stringify(values, null, 2));
    }
  };

  return (
    <div className="checkout-wrapper">
      <p className="checkout-form-heading">Plasează comanda</p>
      <form onSubmit={handleSubmit}>
        <input
          value={values.name}
          name="name"
          required
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Nume"
          className={touched.name && errors.name ? "checkout-form-error-input" : "checkout-form-input"}
        />
        {touched.name && errors.name ? (
          <div className="checkout-error">
            {touched.name && errors.name}
          </div>
        ) : (
          <div className="checkout-error-invis">
            Asd
          </div>
        )}
        <InputMask
          mask="+373 99 999 999"
          maskChar={null}
          alwaysShowMask
          value={values.phone}
          name="phone"
          required
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Telefon"
          className={touched.phone && errors.phone ? "checkout-form-error-input" : "checkout-form-input"}
        />
        {touched.phone && errors.phone ? (
          <div className="checkout-error">
            {touched.phone && errors.phone}
          </div>
        ) : (
          <div className="checkout-error-invis">
            Asd
          </div>
        )}
        <select
          name="callTime"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.callTime}
          className={touched.callTime && errors.callTime ? "checkout-form-error-input" : "checkout-form-input"}
          required
        >
          <option value="" disabled hidden>Ora apelului</option>
          <option value="9:00 - 12:00" className="checkout-option-text">9:00 - 12:00</option>
          <option value="12:00 - 15:00" className="checkout-option-text">12:00 - 15:00</option>
          <option value="15:00 - 18:00" className="checkout-option-text">15:00 - 18:00</option>
          <option value="Cît de curînd posibil" className="checkout-option-text">
            Cît de curînd posibil
          </option>
        </select>
        {touched.callTime && errors.callTime ? (
          <div className="checkout-error">
            {touched.callTime && errors.callTime}
          </div>
        ) : (
          <div className="checkout-error-invis">
            Asd
          </div>
        )}
        <input
          type="submit"
          value="Comandă"
          className="checkout-form-button"
        />

        <div className="checkout-terms-text">
          *Apăsînd butonul Comandă dvs. confirmați că ați 
          luat cunoștință și sînteți de acord cu{" "}
          <Link href="/">
            <span className="checkout-privacy-link">
              politica de confidențialitate
            </span>
          </Link>
            <span>{" "}și{" "}</span>
          <Link href="/">
            <span className="checkout-privacy-link">
              termenii de utilizare
            </span>
          </Link>
          .
        </div>
      </form>
    </div>
  )
}
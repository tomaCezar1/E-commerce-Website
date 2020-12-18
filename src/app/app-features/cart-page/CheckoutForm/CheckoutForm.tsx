import { Formik } from "formik"
import Link from "next/link"
import * as yup from "yup"

export default function CheckoutForm(): JSX.Element {
  const handleSubmit = async (event, info) => {
    event.preventDefault()
    console.log(info)
  }

  return (
    <div className="checkout-wrapper">
      <Formik
        initialValues={{
          name: "",
          phone: "",
          time: "Ora apelului",
        }}
        onSubmit={handleSubmit}
        validationSchema={yup.object().shape({
          name: yup.string().required("Numele este obligatoriu"),
          phone: yup
            .string()
            .min(8, "Număr de telefon inexistent")
            .max(12, "Număr de telefon inexistent")
            .required("Numărul de telefon este obligatoriu"),
        })}
      >{({
          values,
          handleChange,
          isValid
        }) => {
        return (
          <>
            <p className="checkout-form-heading">Plasează comanda</p>
            <input
              value={values.name}
              onChange={handleChange('name')}
              placeholder="Nume"
              className="checkout-form-input"
            />
            <input
              value={values.phone}
              onChange={handleChange('phone')}
              placeholder="Telefon"
              className="checkout-form-input"
            />
            <select
              className="checkout-form-input"
              name="time"
              id="time"
              onChange={handleChange('time')}
              style={values.time === "Ora apelului" ? {color: '#ACB5BD'} : null}
            >
              <option
                value="Ora apelului"
                disabled
                selected
              >
                {values.time}
              </option>
              <option value="9:00 - 12:00" className="checkout-option-text">9:00 - 12:00</option>
              <option value="12:00 - 15:00" className="checkout-option-text">12:00 - 15:00</option>
              <option value="15:00 - 18:00" className="checkout-option-text">15:00 - 18:00</option>
              <option value="Cît de curînd posibil" className="checkout-option-text">
                Cît de curînd posibil
              </option>
            </select>
            <button
              className="checkout-form-button"
              onClick={values.name && values.phone && isValid
                ? event => handleSubmit(event, {...values})
                : null
              }
            >
              Comandă
            </button>
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
          </>
        )
      }}</Formik>
    </div>
  )
}
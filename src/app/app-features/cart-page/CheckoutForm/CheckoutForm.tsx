import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../../../context';
import Link from 'next/link';
import { Select, useToast } from '@chakra-ui/react';
import Toast from '../../../common/toast/Toast';
import { useRouter } from 'next/router';
import InputMask from 'react-input-mask';
import { useMutation } from '@apollo/client';
import { OrdersMutation } from '../CartPageMutation';

const initialValues = {
  name: '',
  phone: '',
  callTime: '',
};

export default function CheckoutForm({
  validate,
  setOrderSuccess,
  insideModal = false,
}): JSX.Element {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({} as any);
  const [touched, setTouched] = useState({} as any);
  const [productsArray, setProductsArray] = useState([] as any);
  const toast = useToast();
  const { cart, clearCart } = useContext(AppContext);

  const router = useRouter();

  useEffect(() => {
    const trimmedProducts = cart.map(({ id, name, articleCode, qty }) => {
      return {
        id,
        name,
        articleCode,
        quantity: qty,
      };
    });

    setProductsArray(trimmedProducts);
  }, []);

  const handleChange = (event) => {
    const { name, value: newValue, type } = event.target;
    // Keep phone field as numbers
    const value = type === 'number' ? +newValue : newValue;
    setValues({
      ...values,
      [name]: value,
    });
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    // @ts-ignore
    const { [name]: removedError, ...rest } = errors;

    const error = validate[name](value);

    // // validate the field if the value has been touched
    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error }),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        const newError = validate[key](values[key]);
        const newTouched = { [key]: true };

        return {
          errors: {
            ...acc.errors,
            ...(newError && { [key]: newError }),
          },
          touched: {
            ...acc.touched,
            ...newTouched,
          },
        };
      },
      {
        errors: { ...errors },
        touched: { ...touched },
      }
    );
    setErrors(formValidation.errors);
    setTouched(formValidation.touched);

    if (
      !Object.values(formValidation.errors).length && // Errors object is empty
      Object.values(formValidation.touched).length ===
        Object.values(values).length && // All fields were touched
      Object.values(formValidation.touched).every((t) => t === true) // Every touched field is true
    ) {
      // Make the request to place an order instead of the alert
      sendOrder();
      toast({
        render: ({ onClose }) => (
          <Toast
            description="Comanda dumneavoastră a fost procesată cu succes."
            handleClose={onClose}
          />
        ),
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      setOrderSuccess(true);
      clearCart();
    }
  };

  const [sendOrder] = useMutation(OrdersMutation, {
    variables: {
      order: {
        name: values.name,
        phoneNumber: values.phone,
        callTime: values.callTime,
        products: productsArray,
      },
    },
  });

  return (
    <div
      className={insideModal ? 'checkout-wrapper-modal' : 'checkout-wrapper'}
    >
      <p className="checkout-form-heading">Plasează comanda</p>
      <form onSubmit={handleSubmit}>
        <input
          value={values.name}
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Nume"
          className={
            touched.name && errors.name
              ? 'checkout-form-error-input'
              : 'checkout-form-input'
          }
        />
        {touched.name && errors.name ? (
          <div className="checkout-error">{touched.name && errors.name}</div>
        ) : (
          <div className="checkout-error-invis">Asd</div>
        )}
        <InputMask
          mask="+373 99 999 999"
          maskChar={null}
          value={values.phone}
          name="phone"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Telefon"
          className={
            touched.phone && errors.phone
              ? 'checkout-form-error-input'
              : 'checkout-form-input'
          }
        />
        {touched.phone && errors.phone ? (
          <div className="checkout-error">{touched.phone && errors.phone}</div>
        ) : (
          <div className="checkout-error-invis">Asd</div>
        )}
        <Select
          name="callTime"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.callTime}
          className={
            touched.callTime && errors.callTime
              ? 'checkout-form-error-input'
              : 'checkout-form-input'
          }
        >
          <option value="" disabled hidden>
            Ora apelului
          </option>
          <option value="9:00 - 12:00" className="checkout-option-text">
            9:00 - 12:00
          </option>
          <option value="12:00 - 15:00" className="checkout-option-text">
            12:00 - 15:00
          </option>
          <option value="15:00 - 18:00" className="checkout-option-text">
            15:00 - 18:00
          </option>
          <option
            value="Cît de curînd posibil"
            className="checkout-option-text"
          >
            Cît de curînd posibil
          </option>
        </Select>
        {touched.callTime && errors.callTime ? (
          <div className="checkout-error">
            {touched.callTime && errors.callTime}
          </div>
        ) : (
          <div className="checkout-error-invis">Asd</div>
        )}
        <input type="submit" value="Comandă" className="checkout-form-button" />

        <div className="checkout-terms-text">
          *Apăsând butonul &#39;Comandă&#39; dvs. confirmați că ați luat
          cunoștință și sunteți de acord cu{' '}
          <Link href="/privacy" as="/privacy-policy" locale={router.locale}>
            <span className="checkout-privacy-link">
              politica de confidențialitate
            </span>
          </Link>
          <span> și </span>
          <Link href="/terms" as="/terms-and-conditions" locale={router.locale}>
            <span className="checkout-privacy-link">termenii de utilizare</span>
          </Link>
          .
        </div>
      </form>
    </div>
  );
}

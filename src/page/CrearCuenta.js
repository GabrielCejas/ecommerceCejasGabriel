import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function CrearCuenta() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name")
      .then((res) => setCountries(res.data));
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    photo: "",
    country: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <div className="crearCuenta">
      <Form
        className="col-11 col-xl-6 my-5 signUpForm"
        onSubmit={handleSubmit()}
      >
        <h3 className="py-4 registroTitle">Crear cuenta!</h3>
        <Form.Group className="mb-3 py-3">
          <Form.Control
            {...register("firstName", {
              required: { value: true, message: "Field is required" },
              pattern: {
                pattern: /^[A-Za-z]+$/i,
                message: "El formato no es correcto",
              },
            })}
            name="firstName"
            type="text"
            placeholder="Por favor, introduzca su nombre"
            onChange={handleChange}
            value={form.firstName}
          />
          {errors.firstName && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>{errors.firstName.message}</span>
            </Alert>
          )}
        </Form.Group>
        <Form.Group className="mb-3 py-3">
          <Form.Control
            {...register("lastName", {
              required: { value: true, message: "Field is required" },
              pattern: {
                pattern: /^[A-Za-z]+$/i,
                message: "El formato no es correcto",
              },
            })}
            name="lastName"
            type="text"
            placeholder="Por favor, introduzca su apellido"
            onChange={handleChange}
            value={form.lastName}
          />
          {errors.lastName && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>{errors.lastName.message}</span>
            </Alert>
          )}
        </Form.Group>
        <Form.Group className="mb-3 py-3" controlId="formBasicEmail">
          <Form.Control
            {...register("email", {
              required: { value: true, message: "Field is required" },
              pattern: {
                value:
                  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                message: "El formato no es correcto",
              },
            })}
            name="email"
            type="email"
            placeholder="Por favor, introduzca su dirección de correo electrónico"
            onChange={handleChange}
            value={form.email}
          />
          {errors.email && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>{errors.email.message}</span>
            </Alert>
          )}
        </Form.Group>
        <Form.Group className="mb-3 py-3 " controlId="formBasicPassword">
          <Form.Control
            {...register("password", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
              minLength: {
                value: 5,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}
            name="password"
            type="password"
            placeholder="Por favor, introduzca su contraseña"
            onChange={handleChange}
            value={form.password}
          />
          {errors.password && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>{errors.password.message}</span>
            </Alert>
          )}
        </Form.Group>
        <Form.Group className="mb-3 py-3">
          <Form.Control
            {...register("photo", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
            })}
            name="photo"
            type="text"
            placeholder="Por favor, introduzca la URL de su foto"
            onChange={handleChange}
            value={form.photo}
          />
          {errors.photo && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>{errors.photo.message}</span>
            </Alert>
          )}
        </Form.Group>
        {countries.length > 0 ? (
          <Form.Select
            {...register("country", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
            })}
            className="mb-3"
            aria-label="Default select example"
            name="country"
            onChange={handleChange}
            value={form.country}
          >
            {errors.country && (
              <Alert className="col-xl-12 p-0 m-0" variant="warning">
                <span>{errors.country.message}</span>
              </Alert>
            )}
            <option>Elija su país</option>
            {countries.map((country, id) => (
              <option value={country.name} key={id}>
                {country.name}
              </option>
            ))}
          </Form.Select>
        ) : (
          <Form.Select className="mb-3" aria-label="Default select example">
            <option value={null}>La lista de países no está disponible.</option>
          </Form.Select>
        )}
        <Button bg="dark" variant="dark" type="submit" className="px-3">
          Crear cuenta!
        </Button>
        <h5 className="py-3 signh5">
          Ya tiene una cuenta?{" "}
          <Button
            variant="link"
            className="registroButton"
            as={Link}
            to="/registro"
          >
            Regístrese aquí!
          </Button>
        </h5>
      </Form>
    </div>
  );
}

export default CrearCuenta;

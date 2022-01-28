import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Registro = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <div className="registro">
      <Form
        className=" col-11 col-xl-6 col-xxl-4 my-3 signInForm"
        onSubmit={handleSubmit()}
      >
        <h2 className="p-4 registroTitle">Registrate!</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dirección de correo electrónico</Form.Label>
          <Form.Control
            {...register("email", {
              required: { value: true, message: "Campo requerido" },
              pattern: {
                value:
                  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                message: "El formato es incorrepto",
              },
            })}
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
          {errors.email && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>{errors.email.message}</span>
            </Alert>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register("password", {
              required: {
                value: true,
                message: "Campo requerido",
              },
              minLength: {
                value: 6,
                message: "El password debe ser de 6 caracteres como minimo",
              },
            })}
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={form.password}
          />
          {errors.password && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>{errors.password.message}</span>
            </Alert>
          )}
        </Form.Group>
        <Button bg="dark" variant="dark" type="submit" className="px-4">
          Registro!
        </Button>
        <h5 className="signh5">
          No tienes una cuenta?{" "}
          <Button
            variant="link"
            className="registroButton"
            as={Link}
            to="/crearCuenta"
          >
            Crear cuenta!
          </Button>
        </h5>
      </Form>
    </div>
  );
};

export default Registro;

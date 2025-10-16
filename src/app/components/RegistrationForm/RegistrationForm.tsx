"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./RegistrationForm.css";

interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormInputs) => {
    console.log("Form submitted:", data);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("✅ User registered successfully!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="register-form">
      <h2>User Registration</h2>

      <div className="form-group">
        <label>Name</label>
        <input {...register("name")} placeholder="Enter your name" />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input {...register("email")} placeholder="Enter your email" />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          {...register("password")}
          placeholder="Enter password"
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>

      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirm password"
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword.message}</p>
        )}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Registering..." : "Register"}
      </button>
    </form>
  );
}

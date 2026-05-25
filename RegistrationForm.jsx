

import { useEffect } from "react";
import { useForm } from "react-hook-form";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
  });

  // Watch all form fields
  const formData = watch();

  // Watch password field
  const password = watch("password");

  // Save draft to localStorage
  useEffect(() => {
    localStorage.setItem("draftProfile", JSON.stringify(formData));
  }, [formData]);

  // Load saved draft
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("draftProfile"));

    if (savedData) {
      Object.keys(savedData).forEach((key) => {
        setValue(key, savedData[key]);
      });
    }
  }, [setValue]);

  // Submit handler
  const onSubmit = async (data) => {
    console.log("Submitted Data:", data);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Registration Successful!");

    reset();

    localStorage.removeItem("draftProfile");
  };

  return (
    <div className="form-container">
      <h1>User Registration Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Full Name */}
        <label>Full Name</label>
        <input
          autoFocus
          type="text"
          placeholder="Enter full name"
          {...register("fullName", {
            required: "Full Name is required",
            minLength: {
              value: 3,
              message: "Minimum 3 characters",
            },
          })}
        />
        {errors.fullName && (
          <p className="error">{errors.fullName.message}</p>
        )}

        {/* Email */}
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="error">{errors.email.message}</p>
        )}

        {/* Password */}
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              message:
                "Password must contain uppercase, lowercase, number, and 8+ chars",
            },
          })}
        />
        {errors.password && (
          <p className="error">{errors.password.message}</p>
        )}

        {/* Confirm Password */}
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p className="error">
            {errors.confirmPassword.message}
          </p>
        )}

        {/* Role */}
        <label>Role / Account Type</label>
        <select
          {...register("role", {
            required: "Please select a role",
          })}
        >
          <option value="">Select a role...</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Product Manager">
            Product Manager
          </option>
        </select>

        {errors.role && (
          <p className="error">{errors.role.message}</p>
        )}

        {/* Terms */}
        <div className="checkbox-group">
          <input
            type="checkbox"
            {...register("terms", {
              required: "You must accept terms",
            })}
          />

          <label>I agree to the Terms & Conditions</label>
        </div>

        {errors.terms && (
          <p className="error">{errors.terms.message}</p>
        )}

        {/* Submit */}
        <button type="submit" disabled={!isValid || isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
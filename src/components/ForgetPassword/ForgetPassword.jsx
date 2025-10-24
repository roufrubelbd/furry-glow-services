import React, { useState, use } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../main";

const ForgotPassword = () => {
  const { resetPassword } = use(AuthContext);
  const [email, setEmail] = useState("");

  const handleResetPassword = (event) => {
    event.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50">
      <div className="bg-white p-6 rounded-2xl shadow-md w-96 text-center border border-emerald-100">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4">
          Reset Password
        </h2>

        <form onSubmit={handleResetPassword} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="btn bg-emerald-500 text-white hover:bg-emerald-600 w-full"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

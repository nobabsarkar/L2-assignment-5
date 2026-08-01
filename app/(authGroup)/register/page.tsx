import RegisterForm from "../_components/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center ">
        <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
          {/* FORM GENERIC TEXTS  */}
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Register Now</h1>
            {/* <p className="text-gray-500">
              Enter your credentialsto access your account
            </p> */}
          </div>

          {/* FROM  */}
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;

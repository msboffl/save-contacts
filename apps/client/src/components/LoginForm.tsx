export function LoginForm() {
  return (
    <>
      <div>
        <h6 className="text-sm opacity-60">
          Enter your credentials to access your account
        </h6>
        <form action="" className="mt-8 flex flex-col gap-4">
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="border-custom-gray-50 border bg-white px-4 py-2"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="border-custom-gray-50 border bg-white px-4 py-2"
          />
          <div className="mt-4 flex flex-col gap-4">
            <button className="bg-custom-violet-50 rounded-sm px-3 py-2 text-white">
              Sign In
            </button>
            <button className="bg-custom-violet-50 rounded-sm px-3 py-2 text-white">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

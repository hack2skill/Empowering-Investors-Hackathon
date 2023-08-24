import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc"

export default function Login() {
  useEffect(() => {
    document.title = "NRAM.ai | Login"
  })
  const handleGoogleSignIn = () => {
    // Implement Google sign-in logic here
    const clientId =
      "280574969621-04krb803lcqf7u38mj8vkv94bmeu3948.apps.googleusercontent.com"; //your client id
    const redirectUri = "http://localhost:3000/google/callback";
    const scopes = [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ];

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?scope=${encodeURIComponent(
      scopes.join(" ")
    )}&response_type=code&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&client_id=${encodeURIComponent(
      clientId
    )}&access_type=offline&prompt=consent`;

    window.location.href = authUrl;
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#e6e7ff]">
      <div className="flex flex-col gap-4 items-center">
        <div className="text-2xl text-slate-800 font-bold">Welcome Back</div>

        <div className="relative z-0 w-full mb-2 group">
          <input type="email" name="floating_email" id="floating_email" className="block rounded py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2 border-[#cacbfe] appearance-none dark:text-white dark:border-gray-400 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
          <label htmlFor="floating_email" className="peer-focus:font-medium left-2 absolute text-sm bg-[#e6e7ff] z-10 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:left-2 origin-[0] peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 px-1">Email</label>
        </div>

        <button type="button" className="bg-violet-500 rounded w-full text-center py-2 text-slate-200">Continue</button>

        <div className="flex items-center relative w-full justify-center py-4">
          <div className="w-full h-[2px] bg-[#d7d8fe]"></div>
          <div className="absolute -translate-x-1/2 left-1/2 bg-[#e6e7ff] p-2 text-slate-500">OR</div>
        </div>

        <button onClick={handleGoogleSignIn} type="button" className="flex items-center justify-center py-2 px-10 text-slate-700 rounded hover:bg-[#e3e4ff] focus:outline-none focus:ring focus:ring-[#e3e4ff] border-2 border-[#cacbfe]">
          <FcGoogle className="mr-4" />
          Continue with Google
        </button>
      </div>

    </div>
  );
}

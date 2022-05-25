import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: any }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await auth(mode, { email, password });

    router.push("/");

    console.log(user);
  };

  console.log(router);

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <form onSubmit={handleSubmit}>
        <div className="shadow-2xl rounded-xl w-1/4 h-1/3 flex justify-center items-center flex-col space-y-6 pb-6">
          <div>
            <div className="font-bold">Email</div>
            <input
              className="shadow-xl w-[250px] h-[40px] rounded-lg p-1 border "
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <div className="font-bold">Password</div>
            <input
              className="shadow-xl w-[250px] h-[40px] rounded-lg p-1 border "
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            className="px-8 py-4 bg-orange-400 rounded-lg text-white font-bold"
            type="submit"
            onClick={() => {
              console.log("RUN");
            }}
          >
            {mode}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;

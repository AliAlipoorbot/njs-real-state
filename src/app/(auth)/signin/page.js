import SigninPage from "@/components/template/SigninPage";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

async function Signin() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <SigninPage />;
}

export default Signin;

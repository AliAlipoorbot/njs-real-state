import DashboardSidebar from "@/components/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";

async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  const user = await User.findOne({email: session.user.email})
  if(!user) return <h3>Something Wrong!</h3>

  return <DashboardSidebar email={user.email} role={user.role}>{children}</DashboardSidebar>;
}

export default DashboardLayout;

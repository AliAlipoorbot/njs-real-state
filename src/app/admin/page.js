import DashboardSidebar from "@/components/layout/DashboardSidebar";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
import Property from "@/models/Property";
import AdminPage from "@/components/template/AdminPage";

async function Admin() {
  await connectDB();

  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");

  const properties = await Property.find({ published: false });

  return (
    <DashboardSidebar email={user.email} role={user.role}>
      <AdminPage properties={properties}/>
    </DashboardSidebar>
  );
}

export default Admin;

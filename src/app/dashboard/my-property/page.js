import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import MyPropertyPage from "@/components/template/MyPropertyPage";
import User from "@/models/User";
import { getServerSession } from "next-auth";

async function MyProperty() {
  const session = await getServerSession(authOptions);

  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "properties",
        foreignField: "userId",
        localField: "_id",
        as: "properties",
      },
    },
  ]);
  return <MyPropertyPage properties={user.properties} />;
}

export default MyProperty;

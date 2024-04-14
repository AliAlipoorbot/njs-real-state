import Property from "@/models/Property";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req, context) {
  try {
    await connectDB();

    const id = context.params.propertyId;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "Log In To Your Account" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "User Doesn't Exist!" },
        { status: 404 }
      );
    }

    if (user.role !== "ADMIN") {
      return NextResponse.json({ error: "Limited Access" }, { status: 403 });
    }

    const property = await Property.findOne({ _id: id });
    property.published = true;
    property.save();

    return NextResponse.json({ message: "Released" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error In Connecting To DB!" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, context) {
  try {
    await connectDB();

    const id = context.params.propertyId;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "Log In To Your Account" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "User Doesn't Exist!" },
        { status: 404 }
      );
    }

    if (user.role !== "ADMIN") {
      return NextResponse.json({ error: "Limited Access" }, { status: 403 });
    }

    const property = await Property.findOne({ _id: id });
    if (!user._id.equals(property.userId)) {
      return NextResponse.json(
        { error: "Your access to this property ad is limited!" },
        { status: 403 }
      );
    }

    await Property.deleteOne({ _id: id });

    return NextResponse.json(
      { message: "Deleted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error In Connecting To DB!" },
      { status: 500 }
    );
  }
}

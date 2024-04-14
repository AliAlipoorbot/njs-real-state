import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Property from "@/models/Property";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = await req.json();

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

    if (
      !title ||
      !location ||
      !description ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json({ error: "Invalid Data!" }, { status: 400 });
    }

    const newProperty = await Property.create({
      title,
      description,
      location,
      phone,
      price: +price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
      userId: new Types.ObjectId(user._id),
    });

    return NextResponse.json({ message: "Add Property" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error In Connecting To DB!" },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    await connectDB();

    const {
      _id,
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = await req.json();

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

    if (
      !_id ||
      !title ||
      !location ||
      !description ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json({ error: "Invalid Data!" }, { status: 400 });
    }

    const property = await Property.findOne({ _id });
    if (!user._id.equals(property.userId)) {
      return NextResponse.json(
        { error: "Your access to this property ad is limited!" },
        { status: 403 }
      );
    }

    property.title = title;
    property.description = description;
    property.location = location;
    property.phone = phone;
    property.realState = realState;
    property.price = price;
    property.constructionDate = constructionDate;
    property.amenities = amenities;
    property.rules = rules;
    property.category = category;
    property.save();

    return NextResponse.json(
      { message: "Edited successfully!" },
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

import Property from "@/models/Property";
import connectDB from "@/utils/connectDB";

import FindPropertyPage from "@/components/template/FindPropertyPage";

async function FindProperty({ searchParams }) {
  await connectDB();

  const properties = await Property.find({ published: true }).select("-userId");

  let finalData = properties;

  if (searchParams.category) {
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }

  return <FindPropertyPage data={finalData} />;
}

export default FindProperty;

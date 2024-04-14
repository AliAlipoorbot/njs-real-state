import AddPropertyPage from "@/components/template/AddPropertyPage";
import Property from "@/models/Property";
import connectDB from "@/utils/connectDB";

async function EditProperty({ params: { propertyId } }) {
  await connectDB();

  const property = await Property.findOne({ _id: propertyId });

  if (!property) return <h3>Something went wrong!. Please try again</h3>;

  return <AddPropertyPage data={JSON.parse(JSON.stringify(property))} />;
}

export default EditProperty;

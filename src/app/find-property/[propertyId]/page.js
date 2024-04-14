import DetailsPage from "@/components/template/DetailsPage";
import connectDB from "@/utils/connectDB";
import Property from "@/models/Property";

async function PropertyDetails({ params: { propertyId } }) {
  await connectDB();

  const properties = await Property.findOne({ _id: propertyId });

  if (!properties) return <h3>Something Went Wrong!</h3>;

  return <DetailsPage data={properties} />;
}

export default PropertyDetails;

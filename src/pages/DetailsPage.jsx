import { useParams } from "react-router-dom";
import ImageDetail from "../components/ImageDetail/ImageDetail";
import data from "../data/data.json";

export function DetailsPage() {
  const { image_id } = useParams();
  const imageId = Number(image_id);

  const image = data.find((img) => img.id === imageId);

  return (
    <>
      <ImageDetail image={image} />
    </>
  );
}

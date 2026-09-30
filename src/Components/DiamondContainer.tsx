import DiamondCard from "./DiamondCard";
// Importing an interface is done like below.
import type { DiamondCardProps } from "../data/data";

// Create a new interface for an array of DiamondCardProps.
// The imported interface is an object interface,
// while data is an array which needs an array interface.
interface DiamondContainerProps {
  data: DiamondCardProps[];
}

export default function DiamondContainer({ data }: DiamondContainerProps) {
  return (
    <div className="DiamondContainer">
      {data.map((listing /*, index*/) => (
        <DiamondCard key={listing.id} {...listing} />
      ))}
    </div>
  );
}

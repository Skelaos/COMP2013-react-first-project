interface DiamondCardProps {
  image: string;
  productName: string;
  price: string;
  sale?: boolean;
}

export default function DiamondCard({
  image,
  productName,
  price,
  sale,
}: DiamondCardProps) {
  return (
    <div className="DiamondCard">
      <img src={image} width="100px"></img>
      <h2>{productName}</h2>
      <p>{price}</p>
      <p style={{ color: "red", fontWeight: "bold" }}>{sale && "SALE"}</p>
    </div>
  );
}

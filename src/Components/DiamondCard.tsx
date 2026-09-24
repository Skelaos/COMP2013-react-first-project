interface DiamondCardProps {
  image: string;
  productName: string;
  price: string;
  sale?: boolean;
}

export default function DiamondCard(props: DiamondCardProps) {
  return (
    <div className="DiamondCard">
      <img src={props.image} width="100px"></img>
      <h2>{props.productName}</h2>
      <p>{props.price}</p>
      <p style={{ color: "red", fontWeight: "bold" }}>{props.sale && "SALE"}</p>
    </div>
  );
}

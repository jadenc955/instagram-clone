import { Button, Image } from "react-bootstrap";

export default function IconButton({ isTop, isBottom, className, onClick, src }) {
  let margin = "light";

  if (isTop) {
    margin = "light my-4";
  } else if (isBottom) {
    margin = "light mt-auto mb-3";
  }

  return (
    <Button variant={margin} style={{ marginBottom: "7px"}} onClick={onClick}>
      <i className={className} style={{ fontSize: "24px" }}></i>
      {src && <Image src={src} roundedCircle/>}
    </Button>
  );
}

import Saleproduct from "./saleProduct";
import SaleDetail from "./SaleDetail";


type Props = {};

const Sale = ({}: Props) => {
  return (
    <div
      style={{
        backgroundColor: "#d3d3d3",
        height: "100vh",
        display: "flex",
        
      }}
    >
      <div style={{ flex: "2", marginTop:"20" }}>
        <Saleproduct />
      </div>

      <div style={{ flex: "1" }}>
        <SaleDetail />
      </div>
    </div>
  );
};
export default Sale;
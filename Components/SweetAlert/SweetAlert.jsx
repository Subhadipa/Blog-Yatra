import SweetAlert from "react-bootstrap-sweetalert";

function SweetAlertComponent({ confirm, cancle, title, subtitle, type }) {
  return (
    <SweetAlert 
      style={{ zIndex: "1"}}
      title={title}
      onConfirm={confirm}
      // type="danger"
      type={type !== undefined ? type : "danger"}
      showCancel={true}
      confirmBtnStyle={{ backgroundColor: "red",marginLeft:"20px",textDecoration:"none",color:"white",height:"30px",width:"80px",padding:"5px" }}
      onCancel={cancle}
      cancelBtnStyle={{ backgroundColor: "blue",marginLeft:"20px",textDecoration:"none",color:"white",height:"30px",width:"80px",padding:"5px" }}
    >
      <h5> {subtitle} </h5>
    </SweetAlert>
  );
}

export default SweetAlertComponent;
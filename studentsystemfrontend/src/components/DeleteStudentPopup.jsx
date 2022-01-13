export default function DeleteStudentPopup({ targetId, setDeletePopup }) {
  // Styling
  const outerDiv = {
    position: "fixed",
    backgroundColor: "#00000066",
    transition: "0.3s",
    height: "100%",
    width: "100%",
    textAlign: "center",
  };

  const innerDiv = {
    position: "absolute",
    height: "30vh",
    top: "25%",
    left: "25%",
    backgroundColor: "white",
    padding: "20px",

    display: 'flex',  
    justifyContent:'center', 
    alignItems:'center'
  };

  // Function
  function handleConfirm(e) {
    e.preventDefault();
    
    console.log(targetId);
    fetch(`http://localhost:8080/student/deleteStudent/${targetId}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Student deleted!");
    });
    setDeletePopup(false);
  }

  function handleCancel(e) {
    setDeletePopup(false);
  }

  return (
    <div style={outerDiv}>
      <div style={innerDiv}>
        <h2>Are you sure you want to delete this entry?</h2>
        <div style={{ textAlign: "center" }}>
          <button
            style={{ fontWeight: "bold", margin: "5px" }}
            className="btn btn-info btn-lg"
            onClick={handleConfirm}
          >
            Confirm
          </button>

          <button
            style={{ fontWeight: "bold", margin: "5px" }}
            className="btn btn-warning btn-lg"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

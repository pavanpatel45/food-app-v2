import React from "react";

function Map() {
  return (
    <div className="flex flex-row justify-around">
      <div className="mt-6">
        <p style={{fontSize:"30px"}}>Get In Touch</p>
        <p style={{fontSize:"38px", color:"#FE5005"}}>Head Office</p>
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "26px",
            marginTop: "2rem",
          }}
        >
          {" "}
          Bundl Technologies Pvt. Ltd. No. 55 Sy No 8 to 14 I & J Block - Ground{" "}
        </p>
        <p style={{fontSize:"20px"}}>
        Floor, Embassy Tech Village | Outer Ring Road, Devarbisanahalli, Varthur
        Bengaluru - 560130</p>
      </div>
      <div className="justify-end">
        <iframe
          style={{ borderRadius: "100px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14716.107994696891!2d75.86555178715818!3d22.764379300000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396303cfa3097bf3%3A0x44c189d08fad2747!2sBiz4Solutions!5e0!3m2!1sen!2sin!4v1713335282454!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
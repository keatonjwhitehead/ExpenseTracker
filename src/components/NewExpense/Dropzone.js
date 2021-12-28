import React from "react";
import "./Dropzone.css";
import { parse } from "papaparse";

const Dropzone = (props) => {
  const [highlighted, setHighlighted] = React.useState(false);
  const [uploadedData, setUploadData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const changeLoadingDisplay= (val) => {
    setIsLoading(val);
    console.log("Changed value to:" + val);
  }
  const uploadFileHandler = (e) => {
    changeLoadingDisplay(true);
    console.log("true");
    e.preventDefault();
    setHighlighted(false);
    Array.from(e.dataTransfer.files)
      .filter(
        (file) =>
          file.type === "text/csv" || file.type === "application/vnd.ms-excel"
      )
      .forEach(async (file) => {
        const text = await file.text();
        const result = parse(text, { header: true });
        setUploadData((existing) => [...existing, ...result.data]);
        result.data.forEach((item) => {
          const dateHolder = new Date(item.date);
          item.date = dateHolder;
          item.amount = Number(item.amount);
          
        });
        delete result.data.splice(-1);
        props.onExpenseUpload_2(result.data);

      });
      console.log("false");
      changeLoadingDisplay(false);
  };

  return (
    <div>
      <h1> Contatct Import</h1>
      
      {isLoading && (
        <img 
        source={{src: '../../assets/files/loading.gif'}}  
        className="loader"
    />
      )}
      {!isLoading && (
        <div
        className={`border-dropzone card ${
          highlighted ? "border-green bg-green" : "border-gray"
        }`}
        onDragEnter={() => {
          setHighlighted(true);
        }}
        onDragLeave={() => {
          setHighlighted(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={uploadFileHandler}
      >
         DROP HERE
         </div>
      )}
       
    </div>
  );
};

export default Dropzone;

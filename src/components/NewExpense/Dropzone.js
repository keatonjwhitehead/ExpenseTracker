import React from "react";
import "./Dropzone.css";
import { parse } from "papaparse";

const Dropzone = (props) => {
  const [highlighted, setHighlighted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [progressText, setText] = React.useState("");  



  const uploadFileHandler = (e) => {
    setIsLoading(true);
    let count = 0;
    
    e.preventDefault();
    Array.from(e.dataTransfer.files)
      .filter(
        (file) =>
          file.type === "text/csv" || file.type === "application/vnd.ms-excel"
      )
      .forEach(async (file) => {
        console.log("for Every file:");
        setText("Opening File...");
        
        const text = await file.text();
        console.log("--Converted to text");
        // setText("Converting files to text");
        const result = parse(text, { header: true });
        console.log("--Parsed text")
        // setText("Parsing text...");
        console.log("--For every item in this file:")
        result.data.forEach((item) => {
          console.log("----Convert item to match database requirements");
          // setText("Converting data to match database for id = " + count);
          const dateHolder = new Date(item.date);
          item.title = item.description;
          item.date = dateHolder;
          item.id = count;
          item.amount = Number(item.amount);
          console.log("----Adding item to database");
          // setText("Adding item to database");
          props.onAddExpense_2(item);
          count++;
         
        });
        console.log("--Deleteig last item");
        delete result.data.splice(-1);
        console.log("--Finished uploading");
        // setText("Finishing upload...");
        setIsLoading(false);
      });
      
      
  };

  return (
    <div>
      <h1> Contatct Import</h1>
        {isLoading && (

       <div> <img
          className="loader"
        />
        <h3>{progressText}</h3>
        </div>
        
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

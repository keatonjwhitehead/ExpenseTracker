import React from "react";
import "./Dropzone.css";
import { parse } from "papaparse";

const Dropzone = (props) => {
  const [highlighted, setHighlighted] = React.useState(false);
  const [uploadedData, setUploadData] = React.useState([]);

  const uploadFileHandler = (e) => {
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
        console.log(result);
        setUploadData((existing) => [...existing, ...result.data]);
      });
  };

  return (
    <div>
      <h1> Contatct Import</h1>
      <div
        className={`border-dropzone ${
          highlighted ? "border-green-600 bg-green-100" : "border-gray-600"
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

      {/* <ul>
        {uploadedData.map((data) => (
          <li key={data.email}>
            <strong>{data.Amount}</strong>: {data.Description}
          </li>
        ))}
      </ul> */}
      <h2>Uploaded Expenses</h2>
      {console.log(uploadedData)};
      <div className="scroll">
      <table>
        <tr>
          <th>Amount</th>
          <th>Balance</th>
          <th>Description</th>
          <th>Details</th>
          <th>Posting Date</th>
          <th>Type</th>
        </tr>
        {uploadedData.map((data) => (
            <tr>
                <td>{data.Amount}</td>
                <td>{data.Balance}</td>
                <td>{data.Description}</td>
                <td>{data.Details}</td>
                <td>{data["Posting Date"]}</td>
                <td>{data.Type}</td>
            </tr>
        ))}        
      </table>
      
      </div>
    </div>
  );
};

export default Dropzone;

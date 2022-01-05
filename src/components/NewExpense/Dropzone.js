import React from "react";
import "./Dropzone.css";
import { parse } from "papaparse";

const Dropzone = (props) => {
  const [highlighted, setHighlighted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [progressText, setText] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState([""]);
  const [badData, setBadData] = React.useState([]);

  const addErrorMessage = (message) => {
    setErrorMessage((prevMessage) => {
      return [...prevMessage, message];
    });
  };

  const addBadExpense = (expense) => {
    setBadData((prevExpenses) => {
      return badData.push(expense);
    });
  };

  const uploadFileHandler = (e) => {
    setIsLoading(true);
    let count = 0;
    setHighlighted(false);
    e.preventDefault();
    Array.from(e.dataTransfer.files)
      .filter(
        (file) =>
          file.type === "text/csv" || file.type === "application/vnd.ms-excel"
      )
      .forEach(async (file) => {
        // console.log("for Every file:");
        setText("Opening File...");

        const text = await file.text();
        // console.log("--Converted to text");
        setText("Converting files to text");
        const result = parse(text, { header: true });
        // console.log("--Deleteig last item");
        // console.log("--Parsed text")
        setText("Parsing text...");
        // console.log("--For every item in this file:");
        result.data.forEach((item) => {
          // console.log("----Convert item to match database requirements");
          // setText("Converting data to match database for id = " + count);
          if((item.date == null || item.date == "") && (item.description == null || item.description == "") && (item.amount == null || item.amount == "")){
            addBadExpense(count);
            addErrorMessage("Empty row found on row: " + count);
          }
          else{
              if (item.date) {
              if (item.description) {
                if (item.amount) {
                  const dateHolder = new Date(item.date);
                  item.title = item.description;
                  item.date = dateHolder;
                  item.id = Math.random().toString();
                  item.amount = Number(item.amount);
                  item.key = Math.random().toString() + count;
                } else {
                  addBadExpense(count);
                  addErrorMessage(
                    "Warning: missing amount from item id: " + (count+1).toString()
                  );
                  return;
                }
              } else {
                addBadExpense(count);
                addErrorMessage(
                  "Warning: missing description from item id: " + (count+1).toString()
                );
                return;
              }
            } else {
              addBadExpense(count);
              addErrorMessage(
                "Warning: missing date from item id: " + (count+1).toString()
              );
              return;
            }
          }

          // console.log("----Adding item to database");
          setText("Adding items to database");
          //props.onAddExpense_2(item);
          count++;
          //setIsLoading(false);
        });
        //Remove the example data so that it does not appear in final list
        props.onRemoveExample("example");
        //console.log the item list to see if the bad items were removed
        badData.forEach((item) => {
          // console.log(result.data);
          result.data.splice(item, 1);
          // console.log("item id: " + item + " cut!");
          // console.log(result.data);
        });
        // console.log(result.data);
        props.onAddExpenses(result.data);
        setIsLoading(false);

        // console.log("--Finished uploading");
        // setText("Finishing upload...");
      });
  };

  return (
    <div>
      <h1>Bank Transaction CSV Import</h1>
      {isLoading && (
        <div>
          <img className="loader" />
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
          {errorMessage.length > 0 && (
            <div>
              {errorMessage.map((item) => {
                return <h3 className="error"> {item}</h3>;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropzone;

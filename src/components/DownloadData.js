import React from "react";
import Card from "./UI/Card";
import './DownloadData.css';

const DownloadData = (props) => {
  return(
  <Card className="expenses">
  <h2 className='expenses-list__fallback'>Download Sample Data below</h2>;
  <a href="https://docs.google.com/spreadsheets/d/1uhq0GTacPCM1gD0NeNtPmRdTMi839Qdmo0mjJj5MPHQ/edit?usp=sharing" target="_blank" className=""><h3 className="link-style">Chase Bank Transactions Data Example</h3></a>
  </Card>
  )
};

export default DownloadData;

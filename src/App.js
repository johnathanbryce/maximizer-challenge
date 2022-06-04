import "./App.css";
import OpenCases from "./components/OpenCases";
import ClosedCases from "./components/ClosedCases";

import { useState, useEffect } from "react";

function App() {
  const [openServices, setOpenServices] = useState([]);
  const [closedServices, setClosedServices] = useState([]);

  // perform data fetch function & case parsing on page load

  //BUG useEffect is running twice --  What is causing it to re-render?
  useEffect(() => {
    getData();
  }, []);

  const url =
    "https://ej2services.syncfusion.com/production/web-services/api/Kanban";
  const axios = require("axios");

  // Receiving URL, transforming it into the target properties(id, status, summary)
  let getData = async () => {
    const dataFetchServices = await axios.get(url);
    const transformedServices = [...dataFetchServices.data].map((service) => {
      return {
        id: service.Id,
        status: service.Status,
        summary: service.Summary,
      };
    });

    // separating the services state into "open" & "closed" cases and update openServices & closedServices state
    const seperateCases = () => {
      let openCasesArr = [];
      let closedCasesArr = [];

      for (let i = 0; i < transformedServices.length; i++) {
        if (
          transformedServices[i].status === "Open" ||
          transformedServices[i].status === "InProgress" ||
          transformedServices[i].status === "Testing"
        ) {
          openCasesArr.push(transformedServices[i]);
        } else if (transformedServices[i].status === "Close") {
          closedCasesArr.push(transformedServices[i]);
        }
      }
      setOpenServices(openCasesArr);
      setClosedServices(closedCasesArr);
    };

    seperateCases();
  };

  /*  -- function that checks str and pushes to array based on service status
  let statusCheck = (servicesString) => {
    let returnArr = [];
    for (let i = 0; i < services.length; i++) {
      if (services[i].status === servicesString) {
        returnArr.push(services[i]);
      }
    }
    console.log(returnArr);
    return returnArr;
  };

  statusCheck("Close");
  statusCheck("Open");
  statusCheck("Testing");
  */

  return (
    <div className="App">
      <OpenCases openServices={openServices} />
      <ClosedCases closedServices={closedServices} />
    </div>
  );
}

export default App;

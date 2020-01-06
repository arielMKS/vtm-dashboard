import React from "react";
import { withRouter } from "react-router-dom";

// video 7:05 params
function Writers(props) {
  const {} = props;
  React.useEffect(() => {
    console.log("Writers UE firing", props);
  });

  return <div>Writer:</div>;
}

export default withRouter(Writers);

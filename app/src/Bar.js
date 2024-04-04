import React from "react";
import Links from "./links"

export default (props) => {
  const [siteName, setSiteName] = React.useState("");

  function init() {
    setSiteName(window.location.pathname.replace("/", ""));
  }

  React.useEffect(init, []);

  return (
    <div>
      <h1>{siteName}</h1>
      <Links />
    </div>
  );
};

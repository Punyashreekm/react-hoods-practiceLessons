import React, { useEffect } from "react";

const HooksExample = () => {
  useEffect(() => {
    console.log("rerendered");
    return () => {
      console.log("unmounted");
    };
  }, []);

  return <div>HooksExample</div>;
};

export default HooksExample;

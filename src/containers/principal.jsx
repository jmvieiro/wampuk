import React, { useEffect, useState } from "react";

import Loading from "../components/loading";
import SmoothRender from "react-smooth-render";

const Principal = (props) => {
  const time = 2000;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, time);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <SmoothRender hidden={loading} timing={time + 100}>
          {props.children}
        </SmoothRender>
      )}
    </>
  );
};

export default Principal;

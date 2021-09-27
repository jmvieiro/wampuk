import React, { useEffect, useState } from "react";

import Loading from "../components/loading";
import { getSuscriptions } from "../firebase/client";

export const WampukContext = React.createContext();

export const WampukProvider = ({ children }) => {
  const [suscripciones, setSuscripciones] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const waitForData = async () => {
      setSuscripciones(await getSuscriptions());
      setLoading(false);
    };
    waitForData();
  }, []);

  return (
    <WampukContext.Provider value={{ suscripciones }}>
      {loading ? <Loading /> : children}
    </WampukContext.Provider>
  );
};

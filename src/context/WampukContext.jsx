import React, { useEffect, useState } from "react";

import Loading from "../components/loading";
import { getSuscriptions, getCursos } from "../firebase/client";

export const WampukContext = React.createContext();

export const WampukProvider = ({ children }) => {
  const [suscripciones, setSuscripciones] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const waitForData = async () => {
      setSuscripciones(await getSuscriptions());
      setCursos(await getCursos());
      setLoading(false);
    };
    waitForData();
  }, []);

  return (
    <WampukContext.Provider value={{ suscripciones, cursos }}>
      {loading ? <Loading /> : children}
    </WampukContext.Provider>
  );
};

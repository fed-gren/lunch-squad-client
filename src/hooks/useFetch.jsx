import { useState, useEffect } from "react";

const useFetch = ({ url }) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  const [trigger, setTrigger] = useState(0);
  const refetch = _ => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    setState({
      ...state,
      loading: true
    });
    async function fetchData() {
      const response = await fetch(url);
      const jsonData = await response.json();
      setState({
        ...state,
        loading: false,
        data: jsonData.body
      });
    }
    fetchData();
  }, [trigger]);

  return { ...state, refetch };
};

export default useFetch;

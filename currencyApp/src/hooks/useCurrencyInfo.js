import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/4d7aa9e69a77ecc856da5865/latest/${currency}`); 
        const result = await response.json();
        if (result.conversion_rates) {
          setData(result.conversion_rates); 
        } else {
          setError("Invalid currency data received.");
        }
      } catch (error) {
        setError("Failed to fetch currency data");
        console.error("Failed to fetch currency data:", error);
      }
    };

    fetchData();
  }, [currency]);

  return { data, error }; 
}

export default useCurrencyInfo;
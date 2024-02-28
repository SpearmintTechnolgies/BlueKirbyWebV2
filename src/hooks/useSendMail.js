import { useState } from "react";

const usePostEmailApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const postEmail = async (email) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const response = await fetch(
        "https://kirby-server.vercel.app/sendConfirmationEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      console.log(data, "data");
      setResponse(data.message);
      setTimeout(() => {
        setResponse("");
      }, 10000);
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
      }, 10000);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, postEmail };
};

export default usePostEmailApi;

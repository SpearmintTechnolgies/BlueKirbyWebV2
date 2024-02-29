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
      console.log(data.code, "dataaa");
      if (data.message) {
        console.log("if");
        setResponse(data.message);
      } else {
        setError("Something went wrong! Try again");
      }
      setTimeout(() => {
        setResponse("");
      }, 10000);
    } catch (error) {
      setError("Something went wrong! Try again");
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

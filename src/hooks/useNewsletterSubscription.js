import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const useNewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [isMail, setIsMail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const subscribeNewsletter = async (listId, apiKey) => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        `https://api.sendinblue.com/v3/contacts`,
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey,
          },
        }
      );

      console.log("Contact added successfully:", response.data);
    } catch (error) {
      console.error("Error adding contact:", error.response.data);
    }

    try {
      const response = await axios.post(
        `https://api.sendinblue.com/v3/contacts/lists/${listId}/contacts/add`,
        {
          emails: [email],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey,
          },
        }
      );

      console.log("Contact added successfully:", response.data);
      setEmail("");
      setError(null);
      toast("Subscribed!");
    } catch (error) {
      console.error("Error adding contact:", error.response.data);
      setError(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e, listId, apiKey) => {
    e.preventDefault();
    if (email.length === 0) {
      setIsMail(true);
    } else {
      setIsMail(false);
      subscribeNewsletter(listId, apiKey);
    }
  };

  return {
    email,
    setEmail,
    isMail,
    isLoading,
    error,
    handleSubmit,
  };
};

export default useNewsletterSubscription;

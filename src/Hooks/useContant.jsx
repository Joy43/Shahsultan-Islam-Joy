import { useState } from "react";
import { useEffect } from "react";

const Usecontact = () => {
  const [contactinfo, setcontactinfo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://portfollio-server-seven.vercel.app/submit-form")
      .then((res) => res.json())
      .then((data) => {
        setcontactinfo(data);
        setLoading(false);
      });
  }, [contactinfo]);
  return [contactinfo, loading];
};

export default Usecontact;

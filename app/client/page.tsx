"use client";

import { Service } from "@/server";
import { useEffect, useState } from "react";

const ClientPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setdata] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    Service.getPosts()
      .then(res => {
        setdata(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-semibold flex items-center justify-center underline my-10">
        Client Side Rendered Page
      </h1>
      {isLoading ? (
        "Loading..."
      ) : (
        <ul className="flex flex-col justify-center items-center">
          {data.map((item: any) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClientPage;

import { Service } from "@/server";

const ServerPage = async () => {
  const data = await Service.getPosts();
  return (
    <div>
      <h1 className="text-4xl font-semibold flex items-center justify-center underline my-10">
        Server Side Rendered Page
      </h1>
      <ul className="flex flex-col justify-center items-center">
        {data.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServerPage;

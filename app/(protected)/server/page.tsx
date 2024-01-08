import { currentUser } from "@/lib/auth";

const ServerPage = async () => {
  const user = await currentUser();
  return <div className="">{JSON.stringify(user)}</div>;
};

export default ServerPage;

import { auth } from "@/auth";
import { FC } from "react";

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = async ({}) => {
  const session = await auth();
  return <div>{JSON.stringify(session)}</div>;
};

export default SettingsPage;

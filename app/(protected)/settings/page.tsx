"use client";

import { logout } from "@/actions/logout";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { FC } from "react";

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = ({}) => {
  const user = useCurrentUser();

  const signLogOutUser = () => {
    logout();
  };
  return (
    <div>
      {JSON.stringify(user)}

      <Button onClick={signLogOutUser} type="submit">
        Sign Out
      </Button>
    </div>
  );
};

export default SettingsPage;

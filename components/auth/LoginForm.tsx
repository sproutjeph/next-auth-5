import { FC } from "react";
import { CardWrapper } from "./CardWrapper";

interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = ({}) => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      LoginForm
    </CardWrapper>
  );
};

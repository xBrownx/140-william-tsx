import { AppRoot } from "@/app/routes/app/root";
import { LoadingScreen } from "@/app/routes/loading";

export const AppRouter = () => {
  return (
    <>
      <LoadingScreen />
      <AppRoot />
    </>
  );
};

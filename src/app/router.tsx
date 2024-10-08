import { lazy } from "react";
import { LoadingScreen } from "@/app/routes/loading";


const LandingRoute = lazy(() =>
    import('./routes/landing')
        .then(({LandingRoute}) => ({default: LandingRoute}))
)


export const AppRouter = () => {
    return (
        <>
            <LoadingScreen />
            <LandingRoute />
        </>
    );
};
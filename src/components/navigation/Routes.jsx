import { useRouterContext } from "@hooks/useRouterContext";
import { matchRoutes } from "@utils/path";
import { NotFound } from "@/pages";

export function Routes({ children }) {
    const { location } = useRouterContext();
    const match = matchRoutes(children, location);
    console.log(match);
    if (!match) return <NotFound />;

    return <>{match}</>;
}

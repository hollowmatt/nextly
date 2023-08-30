import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRout(Component) {
    return function WithAuth(props) {
        const user = useAuth();
        const router = useRouter();

        if(!user) {
            router.push("/login");
            return null;
        }

        return <Component {...props}/>;
    };
}
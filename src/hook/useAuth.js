import { useContext } from "react";
import { AuthContext } from "../hoc/AuthProvider";

export function useAuth() {
    // вызывая этот хук мы получим данные из AuthProvider
    return useContext(AuthContext);
}
import { Navigate } from "react-router-dom";
import UserActionService from "../services/UserActionService";

const userActionService = new UserActionService();

export const ProtectedRoute = ({ children }) => {
    const isUserAuthenticated = userActionService.isUserAuthenticated();
    if (!isUserAuthenticated) {
        // user is not authenticated
        return <Navigate to="/" />;
    }
    return children;
};

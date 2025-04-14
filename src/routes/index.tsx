import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
  (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
const MainLayout = Loadable(lazy(() => import("../layout/MainLayout")));
const Login = Loadable(lazy(() => import("../pages/Login")));
const SignUp = Loadable(lazy(() => import("../pages/SignUp")));
const Profile = Loadable(lazy(() => import("../pages/Profile")));

export const routes: any = [
  { path: "/", element: <Navigate to="/login" /> },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/sign-up", element: <SignUp /> },
      {
        element: <PrivateRoute />,
        children: [{ path: "/profile", element: <Profile/> }],
      },
    ],
  },
];

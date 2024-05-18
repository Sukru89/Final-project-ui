import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import { Dashboard } from "./pages/dashboard";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthenticationGuard } from "./authenticationGuard";
import { Profile } from "./pages/profile";
import About from "./pages/about";
import Loading from "./Component/Loading";
function App() {
  const { isLoading, error } = useAuth0();
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/dashboard"
        element={<AuthenticationGuard component={Dashboard} />}
      />
      <Route path="/about" element={<About />} />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={Profile} />}
      />
      {/*   
      <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;

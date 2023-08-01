import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { useNavigate } from "react-router";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./_app.scss";

const Layout = ({ children }) => {
  const [isSidebarVisible, toggleIsSidebarVisible] = useState(false);

  const handleToggleSidebar = () => toggleIsSidebarVisible((value) => !value);

  return (
    <>
      <Header onToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar isSidebarVisible={isSidebarVisible} />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth");
    }
  }, [accessToken, loading, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomeScreen />{" "}
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <HomeScreen />{" "}
          </Layout>
        }
      />
      <Route path="/auth" element={<LoginScreen />} />
    </Routes>
  );
}

export default App;

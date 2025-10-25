import { Outlet, useNavigation } from "react-router";
import { use } from "react";
import Navbar from "../components/Navbar/Navbar";
import Spinner from "../components/Spinner/Spinner";
import Footer from "../components/Footer/Footer";
import { AuthContext } from "../main";

const Root = () => {
  const navigation = useNavigation();
  const { loading } = use(AuthContext);

  const isLoading = loading || navigation?.state === "loading";

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="min-h-[calc(100vh-285px)]">
          <Outlet />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Root;

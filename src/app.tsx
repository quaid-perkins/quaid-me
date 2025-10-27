import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "@/app.css";

import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <NavBar />
          <Suspense>{props.children}</Suspense>
          <Footer />
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}

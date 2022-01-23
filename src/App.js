import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import Layout from "./Layout";
import "./Layout.css";

Amplify.configure(awsconfig);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;

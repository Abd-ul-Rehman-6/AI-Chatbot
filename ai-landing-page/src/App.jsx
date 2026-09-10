import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import TrustedCompanies from "./components/TrustedCompanies";
import Features from "./components/Features";
import Dashboard from "./components/Dashboard";
import Integrations from "./components/Integrations";
import Testimonials from "./components/Testimonials";
import SetupWorkflow from "./components/SetupWorkflow";
import AiFeatureShowcase from "./components/AiFeatureShowcase";
import CTA from "./components/CTA";
import Pricing from "./components/Pricing";
import Checkout from "./components/Checkout"; // Import the CSS file for the chat widget
import FloatingChat from './components/FloatingChat';
import Footer from "./components/Footer";

import "./App.css";

function Home() {
  const navigate = useNavigate();

  const handleSignUpClick = () => navigate("/signup");
  const handleLoginClick = () => navigate("/login");

  return (
    <>
      <Navbar onSignUpClick={handleSignUpClick} onLoginClick={handleLoginClick} />
      <main>
        <Hero onSignUpClick={handleSignUpClick} />
        <TrustedCompanies />
        <Features />
        <Dashboard />
        <Integrations />
        <Testimonials />
        <SetupWorkflow />
        <AiFeatureShowcase />
        <CTA onSignUpClick={handleSignUpClick} />
      </main>
      <Footer />
    </>
  );
}

function PricingPage() {
  const navigate = useNavigate();

  const handleSignUpClick = () => navigate("/signup");
  const handleLoginClick = () => navigate("/login");

  return (
    <>
      <Navbar onSignUpClick={handleSignUpClick} onLoginClick={handleLoginClick} />
      <main className="pt-16">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <FloatingChat />
    </Router>
  );
}

export default App;
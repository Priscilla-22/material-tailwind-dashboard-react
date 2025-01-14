import { Routes, Route, Navigate } from "react-router-dom";
import {Dashboard, Auth, FarmerCrm, ProductManagement, Logistics} from "@/layouts";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/farmer-crm/*" element={<FarmerCrm />} />
      <Route path="/product-management/*" element={<ProductManagement />} />
      <Route path="/logistics/*" element={<Logistics />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;

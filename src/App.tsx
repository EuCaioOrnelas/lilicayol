
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Novidades from "./pages/Novidades";
import Contato from "./pages/Contato";
import Produto from "./pages/Produto";
import Categoria from "./pages/Categoria";
import PoliticasPrivacidade from "./pages/PoliticasPrivacidade";
import TermosUso from "./pages/TermosUso";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/novidades" element={<Novidades />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="/categoria/:id" element={<Categoria />} />
          <Route path="/politicas-privacidade" element={<PoliticasPrivacidade />} />
          <Route path="/termos-uso" element={<TermosUso />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

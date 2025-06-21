
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Novidades from "./pages/Novidades";
import Feminino from "./pages/Feminino";
import Acessorios from "./pages/Acessorios";
import Contato from "./pages/Contato";
import Filtro from "./pages/Filtro";
import PoliticasPrivacidade from "./pages/PoliticasPrivacidade";
import TermosUso from "./pages/TermosUso";
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
          <Route path="/feminino" element={<Feminino />} />
          <Route path="/acessorios" element={<Acessorios />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/filtro" element={<Filtro />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Download from "./pages/Download";
import SourceCode from "./pages/SourceCode";
import Tutorials from "./pages/Tutorials";
import Models from "./pages/Models";
import Screenshots from "./pages/Screenshots";
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
          <Route path="/download" element={<Download />} />
          <Route path="/source-code" element={<SourceCode />} />
          <Route path="/developer-zone" element={<SourceCode />} />
          <Route path="/manuals" element={<Tutorials />} />
          <Route path="/support" element={<Tutorials />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/models" element={<Models />} />
          <Route path="/quick-models" element={<Models />} />
          <Route path="/movies" element={<Screenshots />} />
          <Route path="/screenshots" element={<Screenshots />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Adventures from "./pages/Adventures";
import AdventurePage from "./pages/AdventurePage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Layout as parent route */}
          <Route path="/" element={<Layout />}>
            {/* Nested routes rendered inside Layout's <Outlet /> */}
            <Route index element={<Index />} />
            <Route path="projects" element={<Projects />} />
            <Route path="project/:slug" element={<ProjectPage />} />
            <Route path="experience" element={<Experience />} />
            <Route path="education" element={<Education />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="adventures" element={<Adventures />} />
            <Route path="adventure/:slug" element={<AdventurePage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

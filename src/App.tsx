import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ContactModal from "@/components/landing/ContactModal";

const Index = lazy(() => import("./pages/Index"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Blog = lazy(() => import("./pages/Blog"));
const AIScreeningforEfficientFieldWorkerRecruitment = lazy(() => import("./pages/5BenefitsofAIScreeningforEfficientFieldWorkerRecruitment"));
const CommonProblemsinFieldWorkerHiringforLandscapingCompanies = lazy(() => import("./pages/7CommonProblemsinFieldWorkerHiringforLandscapingCompanies"));
const WhyManualScreeningSlowsDownLandscapingAndIrrigationHiring = lazy(() => import("./pages/WhyManualScreeningSlowsDownLandscapingAndIrrigationHiring"));
const StructuringYourFieldHiringPipelineforMaximumEfficiency = lazy(() => import("./pages/StructuringYourFieldHiringPipelineforMaximumEfficiency"));



const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();  

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const App = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>

          {/* GLOBAL HEADER */}
          <Header onOpenContactModal={openContactModal} />

          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route
                path="/"
                element={<Index onOpenContactModal={openContactModal} />}
              />

              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/blog" element={<Blog />} />

              {/* Blog Article */}
              <Route
                path="/blog/5-benefits-of-ai-screening-for-efficient-field-worker-recruitment"
                element={<AIScreeningforEfficientFieldWorkerRecruitment />}
              />

              <Route
                path="/blog/7-common-problems-in-field-worker-hiring-for-landscaping-companies"
                element={<CommonProblemsinFieldWorkerHiringforLandscapingCompanies/>}
              />

              <Route
                path="/blog/why-manual-screening-slows-down-landscaping-irrigation-hiring"
                element={<WhyManualScreeningSlowsDownLandscapingAndIrrigationHiring/>}
              />

              <Route
                path="/blog/structuring-your-field-hiring-pipeline-for-maximum-efficiency"
                element={<StructuringYourFieldHiringPipelineforMaximumEfficiency/>}
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>

          {/* GLOBAL FOOTER */}
          <Footer />

          {/* GLOBAL CONTACT MODAL */}
          <ContactModal
            isOpen={isContactModalOpen}
            onClose={closeContactModal}
          />

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

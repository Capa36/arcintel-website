import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import { Contact } from './pages/Contact'
import { IndustrySpecific } from './pages/services/IndustrySpecific'
import { WorkflowOptimization } from './pages/services/WorkflowOptimization'
import { CustomerEngagement } from './pages/services/CustomerEngagement'
import { AISpecialists } from './pages/team/AISpecialists'
import { Blog } from './pages/blog/Blog'
import { BlogPost } from './pages/blog/BlogPost'
import { TermsOfService } from './pages/legal/TermsOfService'
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/arcintel-website">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/industry-specific" element={<IndustrySpecific />} />
        <Route path="/services/workflow-optimization" element={<WorkflowOptimization />} />
        <Route path="/services/customer-engagement" element={<CustomerEngagement />} />
        <Route path="/team/ai-specialists" element={<AISpecialists />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/legal/terms" element={<TermsOfService />} />
        <Route path="/legal/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

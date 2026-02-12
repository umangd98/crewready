import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCanonicalUrl } from "@/hooks/use-canonical-url";

const TermsOfService = () => {
  useCanonicalUrl();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container container-padding py-12 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground">
            <strong>Last Updated:</strong> February 12, 2026
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              Welcome to CrewReady. By accessing or using our website at crewready.ai and our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Description of Services</h2>
            <p>
              CrewReady provides an AI-powered matching platform that connects landscaping and irrigation companies with pre-screened field workers. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Candidate screening and matching</li>
              <li>Job posting and hiring workflow management</li>
              <li>Communication facilitation between employers and candidates</li>
              <li>Background verification services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. User Eligibility</h2>
            <p>
              You must be at least 18 years old and represent a legitimate business entity to use our services. By using CrewReady, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You have the legal authority to enter into these Terms</li>
              <li>You will provide accurate and complete information</li>
              <li>You will comply with all applicable laws and regulations</li>
              <li>Your use of the service will not violate any laws or third-party rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Account Registration and Security</h2>
            <p>
              To access certain features of our services, you may need to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Pricing and Payment</h2>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.1 Fees</h3>
            <p>
              Our pricing is outlined on our website and may include pay-per-hire fees and optional monthly subscription plans. Fees are subject to change with notice.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.2 Payment Terms</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment is due when you complete a hire through our platform</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>You authorize us to charge your provided payment method</li>
              <li>Failure to pay may result in suspension or termination of services</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.3 Replacement Support</h3>
            <p>
              Monthly plan subscribers receive 30-day replacement support as described in our pricing section. This support is subject to specific terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Service Limitations and Disclaimers</h2>
            <p>
              While we strive to provide quality candidate matches, we make no guarantees regarding:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The availability of candidates in your specific location</li>
              <li>The ultimate hiring outcomes or candidate retention</li>
              <li>Specific timelines for candidate delivery</li>
              <li>The performance or behavior of matched candidates after hire</li>
            </ul>
            <p className="mt-4">
              Hiring timelines and outcomes depend on role requirements and local candidate availability. All candidates are screened to the best of our ability, but final hiring decisions remain your responsibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. User Responsibilities</h2>
            <p>As a user of CrewReady, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comply with all employment laws and regulations</li>
              <li>Conduct your own due diligence before hiring candidates</li>
              <li>Treat all candidates fairly and without discrimination</li>
              <li>Provide accurate job descriptions and requirements</li>
              <li>Honor agreed-upon compensation and working conditions</li>
              <li>Not misuse or attempt to circumvent our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Intellectual Property</h2>
            <p>
              All content, features, and functionality of CrewReady, including but not limited to text, graphics, logos, icons, images, and software, are the exclusive property of CrewReady and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mt-4">
              You may not copy, modify, distribute, sell, or lease any part of our services without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the service for any illegal purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Harass, abuse, or harm other users or candidates</li>
              <li>Transmit viruses or malicious code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Scrape, crawl, or data mine our platform</li>
              <li>Impersonate another person or entity</li>
              <li>Interfere with or disrupt our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account and access to our services at any time, with or without notice, for conduct that we believe:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violates these Terms or our policies</li>
              <li>Is harmful to other users, candidates, or CrewReady</li>
              <li>Exposes us to legal liability</li>
              <li>Is otherwise inappropriate</li>
            </ul>
            <p className="mt-4">
              You may terminate your account at any time by contacting us. Termination does not relieve you of any payment obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, CREWREADY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="mt-4">
              Our total liability for any claim arising from your use of our services shall not exceed the amount you paid to us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">12. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless CrewReady and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use of our services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your employment practices or treatment of candidates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">13. Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You waive any right to participate in a class action lawsuit or class-wide arbitration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">14. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">15. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">16. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">17. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-accent rounded-lg">
              <p><strong>CrewReady</strong></p>
              <p>Email: joe@crewready.ai</p>
              <p>Phone: 567-304-3240</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

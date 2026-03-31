import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-lg z-50">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-black mb-4 tracking-tight">
          Terms of Use
        </h1>
        <p className="text-gray-600 mb-12">
          Last updated: March 30, 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-8">
            These Terms of Use ("Terms") govern your access to and use of ADDRAIS ("we", "our", or "us"). By accessing or using our application and services, you agree to be bound by these Terms.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Use of the Service
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            ADDRAIS provides tools to manage, analyze, and interact with contact and relationship data. You agree to use the service only for lawful purposes and in accordance with these Terms.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            User Accounts
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            You may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            User Data
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            You retain ownership of the data you provide. By using ADDRAIS, you grant us a limited license to process and store your data solely for the purpose of providing and improving the service.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Acceptable Use
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You agree not to:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>Use the service for illegal or unauthorized purposes</li>
            <li>Attempt to gain unauthorized access to the system</li>
            <li>Interfere with or disrupt the integrity or performance of the service</li>
            <li>Upload or transmit malicious code</li>
          </ul>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            All content, trademarks, and technology related to ADDRAIS are owned by us or our licensors. You may not copy, modify, distribute, or exploit any part of the service without prior written consent.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Service Availability
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We strive to provide a reliable service but do not guarantee that the service will be uninterrupted or error-free. We may modify or discontinue features at any time without notice.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            To the fullest extent permitted by law, ADDRAIS shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the service.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Termination
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We reserve the right to suspend or terminate your access to the service at our discretion if you violate these Terms.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Third-Party Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our service may rely on third-party providers, including hosting services such as Vercel. We are not responsible for the practices of these third parties.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Governing Law
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            These Terms shall be governed by and interpreted in accordance with applicable laws.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For any questions regarding these Terms, you may contact us at:
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Email: <a href="mailto:tech@addrais.ai" className="text-black font-medium hover:underline">tech@addrais.ai</a>
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Legal Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Developer: Mr Jean Yves SALLERON
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Address: Rue Judes Turiaf, 97221 CARBET
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Changes to These Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We may update these Terms from time to time. Continued use of the service after changes constitutes acceptance of the updated Terms.
          </p>
        </div>
      </main>
    </div>
  );
}
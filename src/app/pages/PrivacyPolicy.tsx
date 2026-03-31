import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-12">
          Last updated: March 30, 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-8">
            This Privacy Policy describes how ADDRAIS ("we", "our", or "us") collects, uses, and protects your information when you use our application and services.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may collect personal information that you provide directly, including but not limited to your name, email address, phone number, and contact data.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            We may also collect usage data such as interactions within the app, device information, and analytics data to improve our services.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use the collected information to:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>Provide and maintain our services</li>
            <li>Improve user experience and product performance</li>
            <li>Communicate with you regarding updates or support</li>
            <li>Ensure security and prevent fraud</li>
          </ul>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Data Sharing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do not sell your personal data.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            We may share information with trusted third-party service providers only when necessary to operate our services, including hosting and analytics.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Data Hosting
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our services are hosted by Vercel. By using ADDRAIS, you acknowledge that your data may be processed and stored on secure servers provided by Vercel.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Depending on your location, you may have the right to access, correct, or delete your personal data. You can request this by contacting us.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy, you can contact us at:
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
            Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
          </p>
        </div>
      </main>
    </div>
  );
}
import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/privacy-policy',
    Component: PrivacyPolicy,
  },
  {
    path: '/terms-of-use',
    Component: TermsOfUse,
  },
]);
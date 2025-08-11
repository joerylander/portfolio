import { useRouter } from 'next/navigation';

export const useNavigateTo = () => {
  const router = useRouter();

  const navigateTo = (path: string) => router.push(path);

  const navigateNewTabURL = (url?: string | null) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const navigateToURL = (url: string) => window.open(url, '_self');

  const goHome = () => router.push('/');
  const goToContact = () => router.push('#contact');
  const goToServices = () => router.push('#services');
  const goToProjects = () => router.push('#projects');
  const goToResumePage = () => router.push('/resume');

  return {
    navigateTo,
    navigateToURL,
    navigateNewTabURL,
    goToContact,
    goToServices,
    goToProjects,
    goToResumePage,
    goHome,
  };
};

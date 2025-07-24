import { useRouter } from 'next/navigation';

export const useNavigateTo = () => {
  const router = useRouter();

  const navigateTo = (path: string) => router.push(path);

  const openInNewTab = (url: string) =>
    window.open(url, '_blank', 'noopener,noreferrer');

  const goHome = () => router.push('/');
  const goToContact = () => router.push('#contact');
  const goToServices = () => router.push('#services');
  const goToProjects = () => router.push('#projects');

  return {
    navigateTo,
    openInNewTab,
    goToContact,
    goToServices,
    goToProjects,
    goHome,
  };
};

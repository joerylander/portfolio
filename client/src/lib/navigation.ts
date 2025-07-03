import { useRouter } from 'next/navigation';

export const useNavigateTo = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const goHome = () => router.push('/');
  const goToContact = () => router.push('#contact');
  const goToServices = () => router.push('#services');
  const goToProjects = () => router.push('#projects');

  return {
    navigateTo,
    goToContact,
    goToServices,
    goToProjects,
    goHome,
  };
};

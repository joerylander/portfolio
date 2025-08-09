import SocialLinks from '../shared/socialLinks';

export default function Footer() {
  return (
    <footer className="mx-0 my-4 flex max-h-36 min-h-28 snap-start flex-col items-center justify-between px-8 lg:mx-8 lg:mb-0 lg:flex-row lg:px-0">
      <p className="text-responsive break-all capitalize md:break-normal">
        &#169;rylander media 2025. all rights reserved
      </p>

      <SocialLinks
        className="my-6 flex gap-12 lg:mx-8 lg:my-0"
        iconSize={32}
        containerSize="size-10 md:size-14"
      />

      <a href="mailto:rylander.media@gmail.com">rylander.media@gmail.com</a>
    </footer>
  );
}

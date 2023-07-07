// @material-tailwind/react components
import { Typography } from "@material-tailwind/react";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialMedia = [
    {
      icon: "fab fa-twitter",
      link: "https://www.twitter.com/creativetim?ref=material-tailwind",
    },
    {
      icon: "fab fa-facebook-square",
      link: "https://www.facebook.com/creativetim?ref=material-tailwind",
    },
    {
      icon: "fab fa-dribbble",
      link: "https://www.dribbble.com/creativetim?ref=material-tailwind",
    },
    {
      icon: "fab fa-github",
      link: "https://www.github.com/creativetimofficial?ref=material-tailwind",
    },
    {
      icon: "fab fa-discord",
      link: "https://discord.com/invite/gxtg2rJa?ref=material-tailwind",
    },
  ];

  const usefulLink = [
    {
      name: "About Us",
      link: "https://www.creative-tim.com/presentation?ref=material-tailwind",
    },
    {
      name: "Blog",
      link: "https://www.creative-tim.com/blog?ref=material-tailwind",
    },
    {
      name: "Github",
      link: "https://github.com/creativetimofficial?ref=material-tailwind",
    },
    {
      name: "Free Products",
      link: "https://www.creative-tim.com/templates/free?ref=material-tailwind",
    },
  ];

  const resources = [
    {
      name: "MIT License",
      link: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=material-tailwind",
    },
    {
      name: "Contribute",
      link: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=material-tailwind",
    },
    {
      name: "Code of Conduct",
      link: "https://github.com/creativetimofficial/material-tailwind/blob/main/CODE_OF_CONDUCT.md?ref=material-tailwind",
    },
    {
      name: "Contact Us",
      link: "https://www.creative-tim.com/contact-us?ref=material-tailwind",
    },
  ];

  return (
    <>
      <footer className="bg-gray-50/50 relative z-50 pt-16 pb-6 text-blue-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-4 md:w-4/12">
              <Typography variant="h4" color="inherit" className="mb-2">
                Material Tailwind
              </Typography>
              <Typography
                color="inherit"
                className="mt-0 mb-2 text-md text-blue-gray-500 font-medium"
              >
                Easy to use React components for Tailwind CSS and Material Design.
              </Typography>
              <div className="mt-6">
                {socialMedia.map(({ icon, link }, key) => (
                  <a key={key} href={link} target="_blank" rel="noreferrer">
                    <i
                      className={`${icon} font-xl text-blue-gray-700 align-center mr-2 inline-block items-center justify-center rounded-full p-3 text-center border border-blue-gray-100 outline-none focus:outline-none`}
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="w-full px-4 md:w-7/12 ml-auto">
              <div className="items-top mb-6 flex flex-wrap">
                <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                  <span className="mb-4 block text-md font-medium text-blue-gray-400">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    {usefulLink.map(({ name, link }, key) => (
                      <li key={key}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="block pb-2 text-sm font-normal leading-relaxed"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                  <span className="mb-4 block text-md font-medium text-blue-gray-400">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    {resources.map(({ name, link }, key) => (
                      <li key={key}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="block pb-2 text-sm font-normal leading-relaxed"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                  <span className="mb-4 block text-md font-medium text-blue-gray-400">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    {resources.map(({ name, link }, key) => (
                      <li key={key}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="block pb-2 text-sm font-normal leading-relaxed"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                  <span className="mb-4 block text-md font-medium text-blue-gray-400">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    {resources.map(({ name, link }, key) => (
                      <li key={key}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="block pb-2 text-sm font-normal leading-relaxed"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-gray-300 my-6" />
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
            <div className="pl-4">
              <a
                href="https://vercel.com/?utm_source=ct-tailwind-team&utm_campaign=oss"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-950 inline-flex items-center font-semibold no-underline"
              >
                <span className="mr-1">Powered by</span>
                <span>
                  <svg height="22" viewBox="0 0 283 64" fill="none">
                    <path
                      fill="currentColor"
                      d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                    ></path>
                  </svg>
                </span>
              </a>

              <div className="py-1 mt-2 text-md font-normal text-blue-gray-500">
                Copyright &copy; {year} Material Tailwind by{" "}
                <a
                  href="https://www.creative-tim.com?ref=material-tailwind"
                  target="_blank"
                  rel="noreferrer"
                  className="text-inherit transition-all"
                >
                  Creative Tim. Made with ❤️ for a better web.
                </a>
              </div>
            </div>
        
            <div className="w-full px-4 text-center md:w-4/12 md:px-0 md:text-right">
              <a href="https://nepcha.com">
                <img src="https://nepcha.com/img/media/badges/analytics-by-nepcha-black-transparent.png" className="ml-auto" width={250} alt="nepcha" /> 
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

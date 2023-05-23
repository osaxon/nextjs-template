type NavButton = {
  label: string;
  href: string;
  style: NavButtonStyle;
};

type NavButtonStyle = "default" | "outline";

type NavLink = {
  label: string;
  href: string;
};

type Navigation = {
  mainNavigation: NavLink[];
  navButtons: NavButton[];
  docLinks: NavLink[];
};

type SiteConfig = {
  clientName: string;
  clientLogo: string;
  siteTitle: string;
  siteDescription: string;
  navigation: Navigation;
  siteTheme: string;
  displayHero: boolean;
  heroText?: string;
  headerImg: string;
  heroImg: string;
};

const siteConfig: SiteConfig = {
  clientName: "Client name",
  clientLogo: "/logo.png",
  siteTitle: "Site name",
  siteDescription: "Description",
  navigation: {
    mainNavigation: [
      {
        label: "About",
        href: "/",
      },
      {
        label: "Services",
        href: "/",
      },
      {
        label: "FAQ",
        href: "/",
      },
    ],
    navButtons: [
      {
        label: "Contact",
        href: "/",
        style: "default",
      },
      {
        label: "Sign up",
        href: "/",
        style: "outline",
      },
    ],
    docLinks: [
      {
        label: "Privacy policy",
        href: "/",
      },
      {
        label: "Terms of Service",
        href: "/",
      },
      {
        label: "Disclaimer",
        href: "/",
      },
    ],
  },
  displayHero: true,
  headerImg: "/images/VN_JUNGLE.jpg",
  heroImg: "/images/VN_MOTORBIKE.jpg",
  siteTheme: "pastel",
};

export default siteConfig;

import twitterIcon from "@/../public/images/tviter-icon.svg";
import facebookIcon from "@/../public/images/facebook-icon.svg";
import instagramIcon from "@/../public/images/instagram-icon.svg";

export const linkLeft = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
];

export const linkRigth = [
  { name: "Contacts", href: "/" },
  {
    name: "ContactIcon",
    href: "/",
    icons: [
      { title: "Twitter", src: twitterIcon, href: "/" }, // Передаємо імпорт як рядок
      { title: "Facebook", src: facebookIcon, href: "/" },
      { title: "Instagram", src: instagramIcon, href: "/" },
    ],
  },
];
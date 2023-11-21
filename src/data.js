import Illustration1 from "./assets/illustration-features-tab-1.svg";
import Illustration2 from "./assets/illustration-features-tab-2.svg";
import Illustration3 from "./assets/illustration-features-tab-3.svg";

// social icons
import Facebook from "./assets/icon-facebook.svg";
import Twitter from "./assets/icon-twitter.svg";

// extensions
import Chrome from "./assets/logo-chrome.svg";
import Firefox from "./assets/logo-firefox.svg";
import Opera from "./assets/logo-opera.svg";
import Dots from "./assets/bg-dots.svg";

export const navlinks = [
  {
    id: 1,
    href: "#features",
    text: "features",
  },
  {
    id: 2,
    href: "#pricing",
    text: "pricing",
  },
  {
    id: 3,
    href: "#contact",
    text: "contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: Facebook,
    href: "https://facebook.com",
    altText: "facebook",
  },
  {
    id: 2,
    icon: Twitter,
    href: "https://twitter.com",
    altText: "twitter",
  },
];

export const features = [
  {
    id: 1,
    shortTitle: "Simple Bookmarking",
    longTitle: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    img: Illustration1,
  },
  {
    id: 2,
    shortTitle: "Speedy Searching",
    longTitle: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    img: Illustration2,
  },
  {
    id: 3,
    shortTitle: "Easy sharing",
    longTitle: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    img: Illustration3,
  },
];

export const extensions = [
  {
    id: 1,
    logo: Chrome,
    title: "Add to Chrome",
    version: "Minimum version 62",
    btnText: "Add & Install Extension",
    dots: Dots,
  },

  {
    id: 2,
    logo: Firefox,
    title: "Add to Firefox",
    version: "Minimum version 55",
    btnText: "Add & Install Extension",
    dots: Dots,
  },

  {
    id: 3,
    logo: Opera,
    title: "Add to Opera",
    version: "Minimum version 46",
    btnText: "Add & Install Extension",
    dots: Dots,
  },
];

export const questions = [
  {
    id: 1,
    title: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },

  {
    id: 2,
    title: "How can I request a new browser?",
    answer:
      "  Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },

  {
    id: 3,
    title: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },

  {
    id: 4,
    title: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

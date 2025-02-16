import images from './images';
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'

export const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "About", link: "#about" },
        { name: "Work", link: "#work" },
        { name: "Skills", link: "#skills" },
        { name: "Testimonial", link: "#testimonial" },
        { name: "Contact", link: "#contact" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "About us", link: "/" },
        { name: "FAQs", link: "/" },
        { name: "How it works", link: "/" },
        { name: "Privacy policy", link: "/" },
        { name: "Payment policy", link: "/" },
      ],
    },
    {
      title: "Get in touch",
      links: [
        { name: "contactus@tanmet.in", link: "mailto:contactus@tanmet.in" },
        { name: "+91123456789", link: "+91123456789" },
      ],
    },
  ];
  
  export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
  ];
export { images };
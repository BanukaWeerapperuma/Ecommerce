import { Link } from "react-router-dom";
import FOOTER_LINKS from "../../assets/footer_links";
import FOOTER_CONTACT_INFO from "../../assets/footer_contact";
import SOCIALS from "../../assets/socials";

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      {title && <h4 className="bold-18 whitespace-nowrap">{title}</h4>}
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flexCenter pb-24 pt-20">
      <div className="max_padd_container flex-w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link to="/" className="mb-10 bold-20">
            Shoppee
          </Link>
          <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((col) => (
              <FooterColumn title={col.title} key={col.title}>
                <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                  {col.links.map((link) => (
                    <Link to="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <FooterColumn title="Contact Us">
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <Link
                  to="/"
                  key={link.label}
                  className="flex gap-4 md:flex-col lg:flex-row"
                >
                  <p>{link.label}</p>
                  <p className="medium-14">{link.value}</p>
                </Link>
              ))}
            </FooterColumn>
            <FooterColumn title="Follow Us">
              <ul className="flex gap-4">
                {SOCIALS.links.map((link, index) => (
                  <Link to="/" key={index}>
                    <img src={link} alt="social_icon" height={22} width={22} />
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-10 pt-5">
        <p className="text-center regular-14 text-gray-20">
          © 2023 Shoppee. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

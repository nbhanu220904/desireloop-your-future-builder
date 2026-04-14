import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="py-12 border-t border-border bg-muted/30">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <img src={logo} alt="DesireLoop" className="h-7 w-7" />
            <span className="font-heading font-bold text-lg">DesireLoop</span>
          </Link>
          <p className="text-sm text-muted-foreground">Where ambition meets opportunity.</p>
        </div>
        {[
          { title: "Product", links: ["Features", "Pricing", "FAQ"] },
          { title: "Company", links: ["About", "Blog", "Careers"] },
          { title: "Legal", links: ["Privacy", "Terms", "Contact"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-heading font-semibold mb-3">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} DesireLoop. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

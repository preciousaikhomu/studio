import { Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import ContactForm from './contact-form';

const contactDetails = [
  { icon: <Phone className="h-6 w-6 text-primary" />, info: '+1 (234) 567-890', label: "Phone number" },
  { icon: <Mail className="h-6 w-6 text-primary" />, info: 'hello@hameedahhaven.com', label: "Email address" },
];

const socialLinks = [
    { href: '#', icon: <Facebook className="h-6 w-6" />, label: "Facebook" },
    { href: '#', icon: <Instagram className="h-6 w-6" />, label: "Instagram" },
    { href: '#', icon: <Twitter className="h-6 w-6" />, label: "Twitter" },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-foreground">Get In Touch</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you. Reach out with any questions or inquiries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-secondary/50 p-8 rounded-lg">
          <h2 className="text-2xl font-headline mb-6">Contact Information</h2>
          <div className="space-y-6">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-center gap-4">
                {detail.icon}
                <div>
                  <p className="text-lg font-semibold">{detail.info}</p>
                  <p className="text-sm text-muted-foreground">{detail.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t pt-8">
            <h3 className="text-xl font-headline mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-muted-foreground hover:text-primary transition-colors" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

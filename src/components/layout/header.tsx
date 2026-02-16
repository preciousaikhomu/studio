'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Logo from '@/components/logo';

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const NavLink = ({ href, label, isMobile }: { href: string; label: string; isMobile?: boolean }) => {
    const isActive = pathname === href || (href === '/shop' && pathname.startsWith('/shop'));
    return (
      <Link
        href={href}
        onClick={() => isMobile && setSheetOpen(false)}
        className={cn(
          'transition-colors font-medium',
          isMobile
            ? 'block w-full p-4 text-2xl font-headline'
            : 'text-base hover:text-primary',
          isActive ? 'text-primary' : 'text-foreground/80'
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className={cn(
      "sticky top-0 z-40 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background p-0">
                <div className="flex justify-between items-center p-4 border-b">
                    <Link href="/" onClick={() => setSheetOpen(false)}>
                        <Logo />
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close navigation menu</span>
                    </Button>
                </div>
              <div className="mt-8 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} isMobile />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

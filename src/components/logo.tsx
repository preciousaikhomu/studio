import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("font-headline text-2xl tracking-wide text-foreground", className)}>
      Hameedah Haven
    </div>
  );
}

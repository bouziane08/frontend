import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Image from 'next/image';

// ⚙️ تعريف الـ Variants للحجم باستخدام cva
const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full',
  {
    variants: {
      size: {
        sm: 'h-8 w-8',
        default: 'h-10 w-10',
        lg: 'h-14 w-14',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

// 🧩 النوع العام للمكون Avatar
export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {}

// 👤 مكون Avatar الأساسي
const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size }), className)}
        {...props}
      />
    );
  }
);
Avatar.displayName = 'Avatar';

// 🖼️ صورة المستخدم داخل Avatar
type AvatarImageProps = React.ComponentProps<typeof Image>;

const AvatarImage = ({
  className,
  alt = 'avatar',
  ...props
}: AvatarImageProps) => {
  return (
    <Image
      className={cn('aspect-square h-full w-full object-cover', className)}
      alt={alt}
      {...props}
    />
  );
};

// 🅰️ Fallback في حال عدم وجود صورة
const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback };

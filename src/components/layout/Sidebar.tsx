'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export interface SidebarProps {
  links: {
    name: string;
    href: string;
  }[];
}

export default function Sidebar({ links }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-muted p-4 min-h-screen border-r">
      <nav>
        <ul className="space-y-2">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 rounded transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

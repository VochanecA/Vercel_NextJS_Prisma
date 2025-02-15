'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CircleIcon, Home, LogOut, Sun, Moon, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@/lib/auth';
import { signOut } from '@/app/(login)/actions';
import { useRouter } from 'next/navigation';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { useTranslations } from 'next-intl';
import { useTheme } from '@/components/ui/ThemeProvider';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, setUser } = useUser();
  const router = useRouter();
  const t = useTranslations('Layout.header');
  const { isDarkMode, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSignOut = async (event: React.FormEvent) => {
    event.preventDefault();
    await signOut();
    setUser(undefined);
    router.push('/');
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className="border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <CircleIcon className="h-6 w-6 text-orange-500" />
          <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">Obstacle Monitor <span style={{ display: 'inline-block', transform: 'rotate(5deg)', backgroundColor: 'red', color: 'white', borderRadius: '50px', padding: '5px 10px' }}>by Alen</span></span>

        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {t('pricing')}
          </Link>
          {user ? (
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenuTrigger>
                <Avatar className="cursor-pointer size-9">
                  <AvatarImage alt={user?.name || ''} />
                  <AvatarFallback>
                    {user?.email
                      ?.split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="flex flex-col gap-1">
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/dashboard" className="flex w-full items-center">
                    <Home className="mr-2 h-4 w-4" />
                    <span>{t('dashboard')}</span>
                  </Link>
                </DropdownMenuItem>
                <form onSubmit={handleSignOut} className="w-full">
                  <button type="submit" className="flex w-full">
                    <DropdownMenuItem className="w-full flex-1 cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>{t('signOut')}</span>
                    </DropdownMenuItem>
                  </button>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              asChild
              className="bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-full"
            >
              <Link href="/sign-up">{t('signUp')}</Link>
            </Button>
          )}
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className=" hover:bg-gray-800 text-white"
          >
            {isDarkMode ? (
              <Sun className="h-[1.2rem] w-[1.2rem] text-orange-500 transition-all" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] text-black transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <LocaleSwitcher />
        </div>
        <div className="md:hidden">
          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variant="ghost"
            size="icon"
            className="text-gray-900 dark:text-white"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-2 space-y-2 bg-white dark:bg-gray-900">
            <Link
              href="/pricing"
              className="text-sm font-extrabold text-orange-700 dark:text-orange-500 hover:text-gray-900 dark:hover:text-white text-center block"
            >
              {t('pricing')}
            </Link>
            <hr className="my-2 border-gray-200 dark:border-gray-700" />
            {user ? (
              <>
                <Link href="/dashboard" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  {t('dashboard')}
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white w-full text-left"
                >
                  {t('signOut')}
                </button>
              </>
            ) : (
              <Button
                asChild
                className="bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-full w-full"
              >
                <Link href="/sign-up">{t('signUp')}</Link>
              </Button>
            )}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="hover:bg-gray-200 text-white w-full"
            >
              {isDarkMode ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-orange-500 transition-all" />
              ) : (
                <Moon className=" h-[1.2rem] w-[1.2rem] text-black transition-all" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <LocaleSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

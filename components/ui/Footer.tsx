'use client';

import Link from 'next/link';
import { Twitter, Instagram, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-4">
        <div className="flex space-x-4">
          <Link href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6 text-blue-500 hover:text-blue-700" />
          </Link>
          <Link href="https://bsky.app/profile/yourhandle" target="_blank" rel="noopener noreferrer">
            <svg width="100%" height="100%" viewBox="0 0 600 530" version="1.1" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 hover:text-blue-700">
              <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" fill="currentColor" />
            </svg>
          </Link>
          <Link href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-6 w-6 text-pink-500 hover:text-pink-700" />
          </Link>
          <Link href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
            <Mail className="h-6 w-6 text-red-500 hover:text-red-700" />
          </Link>
        </div>
        <div className="text-center">
          <p className="text-sm">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

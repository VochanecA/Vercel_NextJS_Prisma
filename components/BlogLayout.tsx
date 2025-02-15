import React from 'react';
import Header from './ui/Header';
import Footer from './ui/Footer';

const BlogLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    );
  };
  
  export default BlogLayout;
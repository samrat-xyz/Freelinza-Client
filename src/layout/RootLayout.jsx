import React, { use } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';
import { AuthContext } from '../context/AuthContext';

function RootLayout() {
  const {loading} = use(AuthContext)
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;

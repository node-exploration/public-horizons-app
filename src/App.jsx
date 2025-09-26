import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import CampaignManager from '@/components/CampaignManager';
import SessionScheduler from '@/components/SessionScheduler';
import CharacterSheets from '@/components/CharacterSheets';
import { Toaster } from '@/components/ui/toaster';

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="campaigns" element={<CampaignManager />} />
        <Route path="schedule" element={<SessionScheduler />} />
        <Route path="characters" element={<CharacterSheets />} />
      </Route>
    </Routes>
  );
}

export default App;
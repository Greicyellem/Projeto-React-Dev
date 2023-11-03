'use client'
import Appbar from './components/Appbar';
import Bottom from './components/Bottom';
import Drawer from './components/Drawer';
import React, {useState, useEffect} from 'react';
import { useRouter } from "next/navigation";
import { searchProducts } from '@/app/utils/api'; 
import VideoCarousel from './components/VideoCarousel';
import './globals.css'


export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const search = async () => {
      const results = await searchProducts(searchTerm);
      setSearchResults(results);
    };

    search();
  }, [searchTerm]);

  return (
    <body>
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
        <VideoCarousel></VideoCarousel>
      <Bottom></Bottom>
      </body>

  )
}
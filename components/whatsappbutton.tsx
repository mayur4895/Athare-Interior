import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const whatsappLink = "https://wa.me/9145602325?text=Hi"; 
  
  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">  <FaWhatsapp /></a>
  );
}

"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";

import React, { useEffect } from "react";

export default function Home() {
  return (
    <>
     <Header />   
       
         <div className={styles.main}>          
            <Image
              className={styles.logo}
              src="/logotaodan.png"
              alt="Next.js Logo"
              width={300}
              height={80}
              priority
            />         
          <section className={styles.grid}>        
             <Card/>
             <Card/>
             <Card/>
             <Card/>
          
         
          </section>
        </div> 
     
    
      <Footer />
    </>
  );
}

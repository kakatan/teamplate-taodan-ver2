"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/header";
import Footer from "./components/footer";
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
              width={400}
              height={100}
              priority
            />
         
          <section className={styles.grid}>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Dịch vụ</h2>
              <li>Dịch vụ khám chữa bệnh</li>             
              <li>Dịch vụ xét nghiệm, chuẩn đoán hình ảnh</li>             
              <li>Dịch vụ chăm sóc điều trị</li>             
              <li>Dịch vụ tại nhà</li>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Bác sĩ</h2>              
              <li>Dịch vụ khám chữa bệnh</li>             
              <li>Dịch vụ xét nghiệm, chuẩn đoán hình ảnh</li>             
              <li>Dịch vụ chăm sóc điều trị</li>             
              <li>Dịch vụ tại nhà</li>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Hoạt động - sự kiện</h2>             
              <li>Dịch vụ khám chữa bệnh</li>             
              <li>Dịch vụ xét nghiệm, chuẩn đoán hình ảnh</li>             
              <li>Dịch vụ chăm sóc điều trị</li>             
              <li>Dịch vụ tại nhà</li>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Hỗ trợ</h2>              
              <li>Dịch vụ khám chữa bệnh</li>             
              <li>Dịch vụ xét nghiệm, chuẩn đoán hình ảnh</li>             
              <li>Dịch vụ chăm sóc điều trị</li>             
              <li>Dịch vụ tại nhà</li>
            </a>
          </section>
        </div>
     
    
      <Footer />
    </>
  );
}

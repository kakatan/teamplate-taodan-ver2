"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";

import React, { useEffect } from "react";

export default function Home() {
  const cardContent1 = [
    "Dịch vụ khám chữa bệnh",
    "Dịch vụ xét nghiệm, chuẩn đoán hình ảnh",
    "Dịch vụ chăm sóc, điều trị",
    "Dịch vụ tại nhà",
  ];
  const cardContent2 = [
    "Danh mục bác sĩ",
    "CV bác sĩ",
    "Content 3",
    "Content 4",
  ];
  const cardContent3 = ["Content 1", "Content 2", "Content 3", "Content 4"];
  const cardContent4 = ["Content 1", "Content 2", "Content 3", "Content 4"];
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
          <Card
            title="BÁC SĨ"
            content={cardContent1}
            backgroundColor="#032B43"
            color="white"
          />
          <Card
            title="DỊCH VỤ"
            content={cardContent2}
            backgroundColor="#FFB100"
            color="white"
          />
          <Card
            title="HOẠT ĐỘNG - SỰ KIỆN"
            content={cardContent3}
            backgroundColor="#489FB5"
            color="white"
          />
          <Card
            title="HỖ TRỢ"
            content={cardContent4}
            backgroundColor="#FFFFFF"
            color="black"
          />
        </section>
      </div>
      <Footer />
    </>
  );
}

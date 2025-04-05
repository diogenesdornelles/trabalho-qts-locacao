"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const BasePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return <></>;
};

export default BasePage;

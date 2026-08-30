"use client";

import { useState, useEffect } from "react";

export function CopyrightDate() {
  const [dateString, setDateString] = useState<string>("© 2026");

  useEffect(() => {
    const now = new Date();
    const month = now.toLocaleString("en-US", { month: "long" });
    const year = now.getFullYear();
    setDateString(`© ${month} ${year}`);
  }, []);

  return <span>{dateString}</span>;
}

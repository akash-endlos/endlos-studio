import React from "react";
import { useRouter } from "next/router";
import FirstNews from "@/components/News/FirstNews";
import SecondNews from "@/components/News/SecondNews";
import ThirdNews from "@/components/News/ThirdNews";
const Blog = ({ }) => {
  const router = useRouter();
  const NewsById = (id) => {
    switch (id) {
      case "Unreal Engine 5.2 Burned Dead":
        return (
          <FirstNews />
        )
      case "Unreal Editor for Fortnite":
        return (
          <SecondNews />
        )
      case "Exploring Hillside":
        return (
          <ThirdNews />
        )
      default:
        break;
    }
  }
  return (
    <>
      {NewsById(router.query.id)}
    </>
  );
};

export default Blog;

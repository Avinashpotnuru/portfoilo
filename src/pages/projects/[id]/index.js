import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { pages } from "@/src/Data";
import ProjectDetailPage from "@/src/components/ProjectDetailPage";

const ProjectInfoPages = () => {
  const router = useRouter();

  const { id } = router.query;

  const pageToRender = {
    "todo-list": pages?.todolist,
    "movies-app": pages?.moviesApp,
    "restaurant-website": pages?.RestaurantWebsite,
    "food-munch": pages?.FoodMunch,
  };

  useEffect(() => {
    if (!id) return;
    if (!pageToRender[id]) {
      router.push("/");
    }
  }, [id]);

  if (!pageToRender[id]) return null;

  console.log(router);

  return (
    <div>
      <ProjectDetailPage data={pageToRender[id]} pageName={id} />
    </div>
  );
};

export default ProjectInfoPages;

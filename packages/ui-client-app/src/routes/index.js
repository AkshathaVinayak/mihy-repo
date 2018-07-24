import React from "react";
import { RenderRoutes } from "ui-molecules";
import { appRoutes } from "config";

const MainRoutes = () => {
  return (
    <main>
      <RenderRoutes routes={appRoutes} />
    </main>
  );
};

export default MainRoutes;

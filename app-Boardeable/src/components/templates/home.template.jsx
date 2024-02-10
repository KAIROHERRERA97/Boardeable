import React from "react";
import HeaderOrganism from "../organisms/header.organisms";
import HomeFilterOrganism from "../organisms/home-filter.organisms";
import HomeListOrganism from "../organisms/home-list.organisms";

function HomeTemplate() {
  return (
    <div className="">
      <HeaderOrganism></HeaderOrganism>
      <div className="flex justify-center w-full px-32">
        <div className="w-full mt-16">
          <h1 className="text-2xl font-bold "> My Boards</h1>
          <main className="flex flex-col gap-4 mt-6">
            <HomeFilterOrganism></HomeFilterOrganism>
            <HomeListOrganism></HomeListOrganism>
          </main>
        </div>
      </div>
    </div>
  );
}

export default HomeTemplate;

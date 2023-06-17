import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"
import { MainPage } from "../../../../pages/MainPage"
import { AboutPage } from "../../../../pages/AboutPage"

export const AppRouter = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        {/*{Object.values(routeConfig).map(({ element, path }) => (*/}
        {/*  <Route key={path} path={path} element={element} />*/}
        {/*))}*/}
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'/:id'} element={<AboutPage/>}/>
      </Routes>
    </Suspense>
  )
}

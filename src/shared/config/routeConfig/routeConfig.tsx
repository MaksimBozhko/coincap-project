import { RouteProps } from "react-router-dom"
import { MainPage } from "pages/MainPage"
import { AboutPage } from "pages/AboutPage"

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  CASE = "case"
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/coin/:id",
  [AppRoutes.CASE]: "/case"
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.CASE]: {
    path: RoutePath.case,
    element: <div>case</div>
  }
}

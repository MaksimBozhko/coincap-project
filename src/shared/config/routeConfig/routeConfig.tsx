import { RouteProps } from "react-router-dom"
import { MainPage } from "pages/MainPage"
import { AboutPage } from "pages/AboutPage"

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  WALLET = "wallet"
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/:id",
  [AppRoutes.WALLET]: "/wallet"
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
  [AppRoutes.WALLET]: {
    path: RoutePath.wallet,
    element: <div>case</div>
  }
}

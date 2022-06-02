import Admin from "./pages/Admin"
import {ADMIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE} from "./utils/consts";
import DevicePage from "./pages/DevicePage";
import Auth from "./pages/Auth";
import Shop from "./pages/Shop";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    }
]
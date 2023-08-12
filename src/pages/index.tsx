// Объединение всех страниц через роутер

import { lazy } from "react";

const Page = lazy(() => import("@/pages-flat/MainPage"))

export default Page;

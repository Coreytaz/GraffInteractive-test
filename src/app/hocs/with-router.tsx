import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";

/**
 * @hoc Инициализация роутера с провайдером для работы с get-параметрами
 */

const withRouter = (component: () => React.ReactNode) => () =>
(
    <BrowserRouter>
        <Suspense fallback={<h1>Загрузка...</h1>}>
            {component()}
        </Suspense>
    </BrowserRouter>
);

export default withRouter;
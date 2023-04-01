import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'
import { store } from "../store";

/**
 * @hoc Инициализация роутера с провайдером для работы с get-параметрами
 */

const withProvider = (component: () => React.ReactNode) => () =>
(
    <BrowserRouter>
        <Suspense fallback={<h1>Загрузка...</h1>}>
            <Provider store={store}>
                <QueryParamProvider adapter={ReactRouter6Adapter}>
                    {component()}
                </QueryParamProvider>
            </Provider>
        </Suspense>
    </BrowserRouter>
);

export default withProvider;
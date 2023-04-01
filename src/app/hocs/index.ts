import compose from "compose-function";
import withProvider from "./with-provider";

/**
 * @hoc Инициализирующая логика приложения
 * @remark Содержит:
 * - логику инициализации роутера (withRouter)
 */
export const withHocs = compose(withProvider);
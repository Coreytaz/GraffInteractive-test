import {
  useQueryParam,
  withDefault,
  StringParam,
  DelimitedArrayParam,
  NumberParam,
} from "use-query-params";
import { useActionFiltert } from "./hooks";

export const useSearchParam = () => {
  const { setSearch: setSearchRedux } = useActionFiltert();
  const [search, _setSearch] = useQueryParam(
    "search",
    withDefault(StringParam, "")
  );
  setSearchRedux(search);

  const setSearch = (nextValue: string) => {
    setSearchRedux(nextValue);
    _setSearch(nextValue || undefined);
  };

  return { search, setSearch };
};

export const useFilterByPort = () => {
  const { setfiltersPort } = useActionFiltert();
  const [port, setParam] = useQueryParam(
    "port",
    withDefault(DelimitedArrayParam, [])
  );
  setfiltersPort(port as string[]);

  const setPort: typeof setParam = (value) => {
    setfiltersPort(value as string[]);
    setParam(value?.length ? value : undefined);
  };

  return { port: port as string[], setPort };
};

export const useFilterByType = () => {
  const { setFiltersType } = useActionFiltert();
  const [type, _setParam] = useQueryParam("type", withDefault(StringParam, ""));
  setFiltersType(type);

  const setType = (nextValue: string) => {
    setFiltersType(nextValue);
    _setParam(nextValue || undefined);
  };

  return { type: type as string, setType };
};

export const useFilterByPage = () => {
  const { setPage } = useActionFiltert();
  const [page, setParam] = useQueryParam("page", withDefault(NumberParam, 1));
  setPage(page);

  const _setPage = (page: number) => {
    setPage(page);
    setParam(page);
  };

  return { page: page as number, _setPage };
};

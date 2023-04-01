import {
  useQueryParam,
  withDefault,
  StringParam,
  DelimitedArrayParam,
  NumberParam,
} from "use-query-params";
import { useActionFiltert } from "./hooks";
import { useSelector } from "react-redux";
import { TypeRootState } from "../../app/store";

export const useSearchParam = () => {
  const { _setPage } = useFilterByPage();
  const filter = useSelector((state: TypeRootState) => state.filter);
  const { setSearch: setSearchRedux } = useActionFiltert();
  const [search, _setSearch] = useQueryParam(
    "search",
    withDefault(StringParam, filter.search)
  );
  setSearchRedux(search);

  const setSearch = (nextValue: string) => {
    _setPage(1);
    setSearchRedux(nextValue);
    _setSearch(nextValue || undefined);
  };

  return { search, setSearch };
};

export const useFilterByPort = () => {
  const { _setPage } = useFilterByPage();
  const filter = useSelector((state: TypeRootState) => state.filter);
  const { setfiltersPort } = useActionFiltert();
  const [port, setParam] = useQueryParam(
    "port",
    withDefault(DelimitedArrayParam, filter.filtersPort)
  );
  setfiltersPort(port as string[]);

  const setPort: typeof setParam = (value) => {
    _setPage(1);
    setfiltersPort(value as string[]);
    setParam(value?.length ? value : undefined);
  };

  return { port: port as string[], setPort };
};

export const useFilterByType = () => {
  const { _setPage } = useFilterByPage();
  const filter = useSelector((state: TypeRootState) => state.filter);
  const { setFiltersType } = useActionFiltert();
  const [type, _setParam] = useQueryParam(
    "type",
    withDefault(StringParam, filter.filtersType)
  );
  setFiltersType(type);

  const setType = (nextValue: string) => {
    _setPage(1);
    setFiltersType(nextValue);
    _setParam(nextValue || undefined);
  };

  return { type: type as string, setType };
};

export const useFilterByPage = () => {
  const filter = useSelector((state: TypeRootState) => state.filter);
  const { setPage } = useActionFiltert();
  const [page, setParam] = useQueryParam(
    "page",
    withDefault(NumberParam, filter.page)
  );
  setPage(page);

  const _setPage = (page: number) => {
    setPage(page);
    setParam(page);
  };

  return { page: page as number, _setPage };
};

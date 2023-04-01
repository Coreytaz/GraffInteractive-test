import {
  useQueryParam,
  withDefault,
  StringParam,
  DelimitedArrayParam,
  NumberParam,
} from "use-query-params";

export const useSearchParam = () => {
  const { _setPage } = useFilterByPage();
  const [search, _setSearch] = useQueryParam(
    "search",
    withDefault(StringParam, "")
  );

  const setSearch = (nextValue: string) => {
    _setPage(1);
    _setSearch(nextValue || undefined);
  };

  return { search, setSearch };
};

export const useFilterByPort = () => {
  const { _setPage } = useFilterByPage();
  const [port, setParam] = useQueryParam(
    "port",
    withDefault(DelimitedArrayParam, [])
  );

  const setPort = (value: string[]) => {
    _setPage(1);
    setParam(value?.length ? value : undefined);
  };

  return { port: port as string[], setPort };
};

export const useFilterByType = () => {
  const { _setPage } = useFilterByPage();
  const [type, _setParam] = useQueryParam("type", withDefault(StringParam, ""));

  const setType = (nextValue: string) => {
    _setPage(1);
    _setParam(nextValue || undefined);
  };

  return { type: type as string, setType };
};

export const useFilterByPage = () => {
  const [page, setParam] = useQueryParam("page", withDefault(NumberParam, 1));

  const _setPage = (page: number) => {
    setParam(page);
  };

  return { page: page as number, _setPage };
};

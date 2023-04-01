import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { filterAction } from "./filtersSlice";

const allActionsFilter = {
  ...filterAction,
};

export const useActionFiltert = () => {
  const dispatch = useDispatch();
  return useMemo(
    () => bindActionCreators(allActionsFilter, dispatch),
    [dispatch]
  );
};

import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { getShipsProduct } from "./shipsSlice";

const allActionsShips = {
  getShipsProduct,
};

export const useActionShips = () => {
  const dispatch = useDispatch();
  return useMemo(
    () => bindActionCreators(allActionsShips, dispatch),
    [dispatch]
  );
};

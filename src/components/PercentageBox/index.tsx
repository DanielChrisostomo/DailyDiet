import React from "react";
import * as C from "./styles";
import { StatisticsTypes } from "src/@types/dataMealTypes";

type Props = {
  statistics: StatisticsTypes | null; 
};

const PercentageBox = ({ statistics }: Props) => {


  return (
    <>
      {statistics !== null ? (
        <C.PercentageBox typeColor={statistics.dietPercentage >= 70 ? "GREEN" : "RED"} >
          <C.PercentageNumber>
            {parseFloat(statistics.dietPercentage.toFixed())}%
          </C.PercentageNumber>
          <C.Texto>das refeições dentro da dieta</C.Texto>
        </C.PercentageBox>
      ) : (
        <C.PercentageBox typeColor="GREEN">
          <C.PercentageNumber>Sua dieta %</C.PercentageNumber>
          <C.Texto>das refeições dentro da dieta</C.Texto>
        </C.PercentageBox>
      )}
    </>
  );
};

export default PercentageBox;



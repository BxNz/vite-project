import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SaleTableReport from "../src/components/saleTableReport";
import reportService from "../src/services/reportService";


type Props = {};

const yesterdayReport = ({}: Props) => {
  const [yesterdayReport, setYesterdayReport] = useState<any[]>([]);

  useEffect(() => {
    try {
      const getYesterdayReport = async () => {
        const yesterdayReport = await reportService.getYesterDayReport();

        if (yesterdayReport.data.success)
          setYesterdayReport(yesterdayReport.data.data);
      };
      getYesterdayReport();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Yesterday Sale Report</Typography>
      <SaleTableReport dataList={yesterdayReport} />
    </Container>
  );
};

export default yesterdayReport;

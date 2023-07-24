// Bibliotecas
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PlanetSizeChart = () => {
  const data = {
    series: [
      4.879, 12.104, 12.742, 6.779, 139.82, 116.46, 50.724, 49.244, 2.376,
      3.474,
    ],
    labels: [
      "Mercúrio",
      "Vênus",
      "Terra",
      "Marte",
      "Júpiter",
      "Saturno",
      "Urano",
      "Netuno",
      "Plutão",
      "Lua",
    ],
  };

  const isMobile = useMediaQuery({ maxWidth: 600 });

  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      id: "planet-size-chart",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 2500,
      },
      toolbar: {
        show: false,
      },
      stacked: isMobile,
    },
    xaxis: {
      categories: data.labels,
    },
    plotOptions: {
      bar: {
        horizontal: isMobile,
        dataLabels: {
          position: isMobile ? "center" : "top",
        },
      },
    },
    colors: ["#008FFB"],
    fill: {
      colors: ["#008FFB"],
      type: "solid",
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.8,
        },
      },
    },
    responsive: [
      {
        breakpoint: 1800,
        options: {
          chart: {
            width: "90%",
            height: 400,
            offsetX: 30,
          },
          dataLabels: {
            enabled: true,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            width: "80%",
            height: 400,
            offsetX: 30,
          },
        },
      },
      {
        breakpoint: 998,
        options: {
          chart: {
            width: "90%",
            height: 350,
            offsetX: 20,
          },
          dataLabels: {
            enabled: true,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            width: "95%",
            height: 300,
            offsetX: 15,
          },
          dataLabels: {
            enabled: true,
          },
        },
      },
      {
        breakpoint: 600,
        options: {
          chart: {
            width: "100%",
            height: 250,
            offsetX: 10,
          },
          dataLabels: {
            enabled: false,
          },
        },
      },
      {
        breakpoint: 500,
        options: {
          chart: {
            width: "100%",
            height: 200,
            offsetX: 5,
          },
          dataLabels: {
            enabled: false,
          },
        },
      },
      {
        breakpoint: 414,
        options: {
          chart: {
            width: "100%",
            height: 250,
            offsetX: 0,
          },
          dataLabels: {
            enabled: false,
          },
        },
      },
    ],
  };

  return (
    <>
      <h2>Tamanho dos Planetas</h2>
      <Chart
        options={chartOptions}
        series={[{ data: data.series }]}
        type="bar"
        height={400}
        width="80%"
      />
    </>
  );
};

export default PlanetSizeChart;

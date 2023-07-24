// Bibliotecas
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PlanetDistanceSunChart = () => {
  // Dados da distância dos planetas em relação ao Sol
  const data = {
    series: [0.39, 0.72, 1, 1.52, 5.2, 9.58, 19.18, 30.07, 39.48, 0.00257],
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

  // Configurações do gráfico
  const options: ApexCharts.ApexOptions = {
    chart: {
      id: "planet-distance-chart",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 2500,
      },
      type: "donut", // Define o tipo de gráfico como Donut
    },
    labels: data.labels, // Rótulos do Donut
    plotOptions: {
      pie: {
        donut: {
          size: "40%", // Define o tamanho do Donut em relação ao gráfico
        },
      },
    },
    dataLabels: {
      enabled: false, // Desativa a exibição dos valores dentro do Donut
    },
  };

  return (
    <>
      <h2>Distância dos Planetas em Relação ao Sol</h2>
      <Chart options={options} series={data.series} type="donut" height={350} />
    </>
  );
};

export default PlanetDistanceSunChart;

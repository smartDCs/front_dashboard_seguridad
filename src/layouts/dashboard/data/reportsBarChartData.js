

const reportsBarChartData = {
  chart: {
    labels: ["Ene", "Feb", "Mar","Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    datasets: { label: "Sales", data: [10, 2, 1,4, 2, 0, 2, 0, 0, 0, 23, 50] },
  },
  items: [
    {
      icon: { color: "secondary", component: "directions_run" },
      label: "Movimiento",
      progress: { content: "36", percentage: 99.9 },
    },
    {
      icon: { color: "error", component: "local_fire_department" },
      label: "Incendio",
      progress: { content: "2", percentage: 0.1 },
    }
  ],
};

export default reportsBarChartData;

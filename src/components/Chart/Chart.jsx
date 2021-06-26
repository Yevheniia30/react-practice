import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {
  const [plan, setPlan] = useState({});
  //   const [actually, setActually] = useState({});

  const plannedData = () => {
    setPlan({
      labels: ['22 Jul', '23 Jul', '24 Jul', '25 Jul', '26 Jul', '27 Jul'],
      datasets: [
        {
          label: 'Актуальные оставшиеся трудозатраты в часах ',
          // запланированные часы
          data: [50, 40, 30, 20, 10, 6],
          fill: false,
          backgroundColor: '#1988EE',
          borderColor: '#1988EE',
        },
        {
          label: ' Запланированные оставшиеся трудозатраты',
          // фактические  часы
          data: [52, 36, 30, 21, 8, 6],
          fill: false,
          backgroundColor: '#FA3B3F',
          borderColor: '#FA3B3F',
        },
      ],
    });
  };

  //   const actuallyData = () => {
  //     setActually({
  //       labels: ['22 Jul', '23 Jul', '24 Jul', '25 Jul', '26 Jul', '27 Jul'],
  //       datasets: [
  //         {
  //           label:
  //             'Актуальные оставшиеся трудозатраты в часах Запланированные оставшиеся трудозатраты',
  //           // запланированные часы
  //           datadata: [55, 41, 28, 22, 6],

  //           fill: false,
  //           backgroundColor: 'rgb(255, 99, 132)',
  //           borderColor: 'rgba(255, 99, 132, 0.2)',
  //         },
  //       ],
  //     });
  //   };

  useEffect(() => {
    plannedData();
  }, []);

  //   useEffect(() => {
  //     actuallyData();
  //   }, []);

  return (
    <div style={{ width: '1000px', height: '400px', padding: '20px' }}>
      <h1>BurnDown Chart (Calendar Team)</h1>

      <Line
        data={plan}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          responsive: true,
        }}
      />
    </div>
  );
};

export default Chart;

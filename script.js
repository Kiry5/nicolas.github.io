// Função para converter números em palavras
function numeroParaPalavra(num) {
    const palavras = [
        "0 veículos", "50 veículos", "100 veículos", "150 veículos", "200 veículos", "250 veículos",
        "300 veículos", "350 veículos", "400 veículos", "450 veículos", "500 veículos", "550 veículos", "600 veículos",
        "650 veículos", "700 veículos", "750 veículos", "800 veículos", "850 veículos",
        "900 veículos", "950 veículos", "1000 veículos"
    ];
    return palavras[num] || num.toString(); // Retorna o número como string se não estiver na lista
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Carros', 'Motocicletas', 'Caminhões', 'Ônibus', 'Vans'],
        datasets: [{
            label: 'Vendas',
            data: [500, 300, 250, 150, 100], // Números originais de vendas
            backgroundColor: [
                'rgba(128, 128, 128, 0.2)', // Cinza
                'rgba(128, 128, 128, 0.2)', // Cinza
                'rgba(128, 128, 128, 0.2)', // Cinza
                'rgba(128, 128, 128, 0.2)', // Cinza
                'rgba(128, 128, 128, 0.2)' // Cinza
            ],
            borderColor: [
                'rgba(128, 128, 128, 1)', // Cinza
                'rgba(128, 128, 128, 1)', // Cinza
                'rgba(128, 128, 128, 1)', // Cinza
                'rgba(128, 128, 128, 1)', // Cinza
                'rgba(128, 128, 128, 1)' // Cinza
            ],
            borderWidth: 1,
            datalabels: {
                anchor: 'end',
                align: 'end',
                formatter: (value) => numeroParaPalavra(value), // Converte os números em palavras
                color: '#808080' // Cor cinza para os rótulos de dados
            }
        }]
    },
    options: {
        plugins: {
            datalabels: {
                display: true,
                color: '#808080', // Cor cinza para o texto dos rótulos
                font: {
                    weight: 'bold'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#808080' // Cor cinza para os rótulos dos meses
                },
                title: {
                    display: true,
                    text: 'Tipos de Veículos',
                    color: '#808080'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#808080', // Cor cinza para os rótulos dos números
                    callback: function(value) {
                        return numeroParaPalavra(value); // Substitui os números por palavras
                    }
                },
                title: {
                    display: true,
                    text: 'Quantidade de Vendas',
                    color: '#808080'
                }
            }
        },
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        elements: {
            bar: {
                borderWidth: 2, // Espessura das bordas das barras
                borderSkipped: 'bottom' // Impede a borda embaixo das barras
            }
        }
    },
    plugins: [ChartDataLabels] // Inclui o plugin
});

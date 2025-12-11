import "./CSS/CashFlow.css"
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const podatki = [
  { ime: 'OBVEZNO', vrednost: 400 },
  { ime: 'FAJN MET', vrednost: 300 },
  { ime: 'NEUMNOSTI', vrednost: 200 },
];

const barve = ['#0088FE', '#FF8042', '#00C49F'];
export default function Expenses(){
    return(
        <>
        <div className="containerr">
            <h2 className="naslov">STROŠKI</h2>
            <div className="BarChart">
            <PieChart width={500} height={300}>
                <Pie
                data={podatki}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={100}
                fill="#8884d8"
                dataKey="vrednost"
                nameKey="ime"
                >
                {podatki.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={barve[index % barve.length]} />
                ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
            </div>
        </div>
        </>
    )
}
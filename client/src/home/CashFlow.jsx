import "./CSS/CashFlow.css"
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
export default function CashFlow(){
    const data = [
  { name: 'J', PRILIV: 400, ODLIV:300 },
  { name: 'F', uv: 300 },
  { name: 'M', uv: 200 },
  { name: 'A', uv: 200 },
  { name: 'M', uv: 200 },
];
    return(
        <>
            <div className="containerr">
                <h2 className="naslov">CASH FLOW</h2>
                <div className="BarChart">
                    <BarChart width={350} height={250} data={data}>
                    {/* <CartesianGrid stroke="#ccc" /> */}
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 1000]} />
                    <Tooltip />
                    <Bar dataKey="PRILIV" fill="#669bbc" />
                    <Bar dataKey="ODLIV" fill="#c1121f" />
                </BarChart>
                </div>
            </div>
        </>
    )
}
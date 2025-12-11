import Header from "./Header"
import CashFlow from "./CashFlow"
import "./CSS/Home.css"
import Expenses from "./Expenses"
import Stanje from "./Stanje"
export default function Home(){


    return(
        <>
            <Header/>
            <div className="container">
                <div className="zgornji">
                    <div className="box"><Stanje/></div>
                </div>
                <div className="containerGrid spodnji">
                    <div className="box"><CashFlow /></div>
                    <div className="box"><Expenses/></div>
                </div>
            </div>
        </>
    )
}
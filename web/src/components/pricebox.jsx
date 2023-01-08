import { PriceBoxComponent } from './style'

export default function PriceBox({title, price, price12x, link}) {


    return (

        <PriceBoxComponent>
            <header>
                <h1>{title}</h1>
            </header>
            <main>

                <h1> 12x de {price12x}</h1>
                <p>ou apenas {price} à vista</p>

                <button onClick={() => window.location.href = link}>
                    FAZER ORÇAMENTO
                </button>
            </main>

        </PriceBoxComponent>

    )

}
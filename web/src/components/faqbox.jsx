import { CaretDown, CaretLeft } from "phosphor-react";
import { useState } from "react";
import { FaqBoxCard, FaqBoxComponent, FaqBoxDesc } from "./style";


export function FaqBox({question, answer}) {

    const [openDesc, setOpenDesc] = useState(false)

    return (

        <FaqBoxComponent>
            <FaqBoxCard onClick={() => setOpenDesc(!openDesc)}>
                <h1>{question}</h1>
                <button> 
                    {
                        openDesc ?
                        <CaretDown />
                        :
                        <CaretLeft />
                    }
                    
                     </button>
            </FaqBoxCard>

            {
                openDesc &&
                <FaqBoxDesc>
                    <p>{answer}</p>
                </FaqBoxDesc>
            }
        </FaqBoxComponent>

    )

}
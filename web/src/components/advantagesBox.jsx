import { AdvantageBoxComponent } from './style'

export default function AdvantageBox({ title, desc, imgSrc, first }) {


    return (

        <AdvantageBoxComponent>
            <header>
                <img 
                src={imgSrc}
                width='65px'
                height='65px'
                style={{
                    transform: first ? 'scale(3)' : 'scale(1)'
                }}
                />
            </header>
            <main>

                <h1>{title}</h1>
                <p>{desc}</p>
            </main>

        </AdvantageBoxComponent>

    )

}
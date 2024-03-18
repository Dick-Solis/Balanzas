import styled from "@emotion/styled";
import { BarraUser } from "../components/div/BarraUser";
import { Imagen } from "../components/datos/Imagen";
export function Quienes(){


    return(<>
    <>
    <ContentGeneral>
    

        <ContentTextos>
        <div>
            <h2>¿Quienes Somos ?</h2>
          
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quas quia id nesciunt amet, e
                arum culpa Lorem <br /> ipsum dolor sit amet consectetur, adipisicing elit. Odit sapiente nihil tenetur minima <br />
                  dolorum excepturi consequuntur reprehenderit. <br /> 
                Voluptatem quidem facere animi repellendus voluptates! Accusantium, molestias unde rem aspernatur dolore tempora!
                quibusdam, <br />recusandae reiciendis corrupti vel dicta, 
            deserunt totam! Harum amet voluptatem ea autem architecto!</p>
            </div>
                <ContentIMG>
                    <Imagen/>

                </ContentIMG>
        </ContentTextos>
    </ContentGeneral>
    </>

    
    </>)
}

const ContentGeneral =styled.div`
width: 100%;
height: 100vh;
justify-content:center;
`;



const ContentTextos = styled.div`
text-align: center;
padding-top: 100px;
gap: 50px;
display: flex;
width: 100%;
height: 100vh;
font-size: 25px;
h2{
    font-weight:  bold;

}
p{
    font-size: clamp(12px, 4vw, 18px);
}
`
;

const ContentIMG = styled.div`
margin-left: 80px;
`;
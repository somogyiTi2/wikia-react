import React, { ComponentPropsWithRef, ElementType, ReactNode } from 'react'

// type ConfainerProps = {
//     as:ElementType //ez validálja le milyen típusú egy objektum 
//     children: ReactNode; //type PropsWithoutChildren
// }

// const Polimorfic = ({as}:ConfainerProps) => {
// if('href' in props ){ //ha tartalmazza props a href-et akkor <a>lesz
//     return <a href='as'></a>
// }
// const Component = as || 'div';
//   return (
//    <Component>Polimorfic</Component>
//   )
// }

// export default Polimorfic


type ContainerProps<T extends ElementType> = {
    //ElementType -ra kényszerítjuk ami validálja az objektum típusát. 
    as?: T;
    //Ezt T azaz generatít típus, ami ElementType itt azért van mert lent is kell a T 
    children: ReactNode;
    //ReactNode vagy PropsWithoutChildren 
} & ComponentPropsWithRef<T>;
//Ezzel adom meg igazából összes többi tulajdonságát (pl ha gomb, onClick vagy bármi.)

export default function Polimorfic<C extends ElementType>({
    //C generatív típus ami elementType-ra van tényszerítve
    as, children, ...props
}: ContainerProps<C>) {

    //ConteinerPropsz típusa C  ami bejövő érték
    const Component = as || 'div';
    // kötelező egy alap típus a componensnek + mivel változó így nem kezdődhet nagy betűvel és a componens mindig nagybetű
    return (
        <Component {...props}>{children}</Component>
    )
}


//image={{src: goalsImg, alt:'A list of goals' }}

import { type ReactNode } from "react";

type ImagePorps = {
    src: string;
    alt: string;
}

interface HeaderPorps { image: ImagePorps, children: ReactNode }


export default function Header({ image, children }: HeaderPorps) {
    return (
        <>
            {/* <img src={image.src} alt={image.alt}/> */}
            <img {...image} />
            {children}
        </>)

}
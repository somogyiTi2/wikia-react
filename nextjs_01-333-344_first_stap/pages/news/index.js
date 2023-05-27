// our-getDomainLocale.com/news/
//azért kell indexnek elnevezni, mivel a mappában ez lesz a főelem és így oldom meg az egágazódást

import Link from 'next/link'
import { Fragment } from "react";

function NewsPage() {
    return (
        <Fragment>
            <ul>
                <li>

                    <Link
                        href="/news/next-js-is-a-great-framwork">
                        NextJS is a great framework
                    </Link>
                </li>
                <li>
                    <a href="/news/Proba">Ezzel újra rendelödik:/Proba</a>
                </li>

            </ul>
        </Fragment>)
}

export default NewsPage;
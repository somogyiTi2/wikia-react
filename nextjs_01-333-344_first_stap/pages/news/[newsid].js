import { useRouter } from 'next/router'
// []-ezzel lehet dinamikus id-t beállítani.
// http://localhost:3000/news/...

function DetailPage() {
    const router = useRouter();

const newsid=    router.query.newsid;
    // [newsid]-a file neve emiatt van a végén .newsid
    console.log(router.query.newsid);
    //http://localhost:3000/news/EZTÍRJAKIAMITIDEÍROK
   
    //ez egy req küldéssel kérhet itt apit ezzel amódszerrel.

    return( <h1>Hello {newsid}!</h1>)
}

export default DetailPage;
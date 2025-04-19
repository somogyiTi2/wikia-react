import { type FormEvent, ComponentPropsWithRef, useRef } from "react"

type FormPorps = ComponentPropsWithRef<'form'> &
{
onSave: (value:unknown)=>void
};

export default function Form({onSave,children,...otherProps}: FormPorps) {
    const form = useRef<HTMLFormElement>(null)
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        //Ez egy mechanizmus, mondhatni
        // amely be van építve a böngészőbe, be van építve a JavaScriptbe,
        // amely lehetővé teszi az összes érték automatikus összegyűjtését
        // amelyek bármelyik beviteli mezőbe be lettek írva
        // és csoportosítsa őket egy ilyen adatobjektumban.
        //csak az inputnak meg kell adni egy nevet.
        const data = Object.fromEntries(formData);
        // console.log(data)
        onSave(data)
        form.current?.reset();
    }

    return <form onSubmit={handleSubmit}
        {...otherProps} 
        ref={form}>
        {children}
    </form>
}

// export default function Form<ide>({}: oda): vagyemide {}
// Ebben az esetben:

// <ide> egy generikus típus (TypeScript-ben a generikusok lehetővé teszik, hogy a függvény egy később meghatározott típussal működjön).
// ({}: oda) azt jelenti, hogy az első paraméter egy objektum, amelynek típusa oda.
// : vagyemide a függvény visszatérési típusa.
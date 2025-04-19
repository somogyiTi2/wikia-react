import { type FormEvent, ComponentPropsWithRef, forwardRef, useImperativeHandle, useRef } from "react";

type FormProps = ComponentPropsWithRef<'form'> & {
    onSave: (value: unknown) => void;
};

export type FormHandler = {
    clear: () => void;
};

const Form = forwardRef<FormHandler, FormProps>(
    function Form({
        onSave, children, ...otherProps
    }: FormProps, ref) {
        const form = useRef<HTMLFormElement>(null);

        useImperativeHandle(ref, () => ({
            clear() {
                console.log('CLEARING');
                form.current?.reset();
            }
        }), []); 

        //A `useImperativeHandle` egy React Hook, amellyel egy komponens testreszabhatja a ref objektumát, így a szülő komponens közvetlenül meghívhat bizonyos metódusokat a gyerekelemen.
        //useImperativeHandle(ref, createHandle, [dependencies])

        function handleSubmit(event: FormEvent<HTMLFormElement>) {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);

            //Ez egy mechanizmus, mondhatni
            // amely be van építve a böngészőbe, be van építve a JavaScriptbe,
            // amely lehetővé teszi az összes érték automatikus összegyűjtését
            // amelyek bármelyik beviteli mezőbe be lettek írva
            // és csoportosítsa őket egy ilyen adatobjektumban.
            //csak az inputnak meg kell adni egy nevet.

            // ITT JAVÍTOTTAM: formData.entries() kell a helyes működéshez
            const data = Object.fromEntries(formData.entries());

            // console.log(data)
            onSave(data);
            form.current?.reset();
        }

        return (
            <form onSubmit={handleSubmit} {...otherProps} ref={form}>
                {children}
            </form>
        );
    }
);

export default Form;

// export default function Form<ide>({}: oda): vagyemide {}
// Ebben az esetben:

// <ide> egy generikus típus (TypeScript-ben a generikusok lehetővé teszik, hogy a függvény egy később meghatározott típussal működjön).
// ({}: oda) azt jelenti, hogy az első paraméter egy objektum, amelynek típusa oda.
// : vagyemide a függvény visszatérési típusa.

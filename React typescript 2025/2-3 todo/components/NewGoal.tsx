import { type FormEvent } from 'react';
import { useRef } from 'react';

type NewGoalProps = {
    onAddGoal: (goal: string, summery: string) => void;
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {
    /*azért kell null érték kezd értéknek, hogy ne lehessen undefined (lent emiatt sípol be  a returnbea  ref=...)*/
    /*HTMLInputElement eltünetei a enteredGoal value gondját mivel meg van adva neki, hogy egy HMTLInputba kell keresnie*/
    const goal = useRef<HTMLInputElement>(null);
    const summery = useRef<HTMLInputElement>(null);

    function handlerSumbeit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        /*meg kell igérni hogy létezik a gaol.current*/
        const enteredGoal = goal.current!.value;
        const enteredSummery = summery.current!.value;
      
        onAddGoal(enteredGoal, enteredSummery)
        event.currentTarget.reset();
    }


    return (
        <form onSubmit={handlerSumbeit}>
            {/*  <form onSubmit={(event)=>/*...* /:FormEvent}>  */}
            <p>
                <label htmlFor="goal">
                    Your goal:

                </label>
                <input type="text" id="goal" name="goal" ref={goal}></input>
            </p>
            <p>
                <label htmlFor="summery">
                    Short summery:
                </label>
                <input type="text" id="summery" name="summery" ref={summery}></input>
            </p>
            <p>
                <button>Add goal</button>
            </p>
        </form>
    )
}

import { /*3. type FC,*/ type PropsWithChildren, /*2. type ReactNode */ } from 'react';

//2. interface CorsGoalPorps { title: string, children: ReactNode }

type CourseGoalProps = PropsWithChildren<{ id:number ,title: string, onDelet: (id: number) => void }>;

//1. export default function CorsGoal({ title, desc }: { title: string, desc: string }) {
//2. export default function CorsGoal({ title, children }: CorsGoalPorps) {
export default function CorsGoal({ id,title, children, onDelet }: CourseGoalProps) {
    return <article>
        <div>
            <h2>
                {title}
            </h2>
            <div>{children}</div>
        </div>
        <button onClick={()=>onDelet(id)}>delete</button>
    </article>
}

//3.

// const CorseGoal:FC<CourseGoalProps> = ({title,children}) => {
//     return <article>
//           <div>
//                 <h2>
//                    {title}
//                 </h2>
//                 <p>{children}</p>
//             </div>
//             <button>add</button>
//       </article>
//      }

// export default CorseGoal
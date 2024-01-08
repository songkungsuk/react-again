interface Props {
    title:String|undefined;
    body:String|null;
}


export const Footer = (prop:Props) => {
    return(
        <article>
            <h2>{prop.title}</h2>
            {prop.body}
        </article>
    )
}
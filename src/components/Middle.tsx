
interface Topics {
    topic: Topic[];
    onChangeMode: Function;
}


type Topic = {
    id: Number;
    title: String|undefined;
    body: String;
}
export const Middle = (prop: Topics) => {
    console.log(prop);
    let html = [];

    for (let i = 0; i < prop.topic.length; i++) {
        html.push(<li key={'a' + prop.topic[i].id}><a href={'/read/' + prop.topic[i].id} onClick={(event) => {
            event.preventDefault();
            prop.onChangeMode(prop.topic[i].id);
        }}>{prop.topic[i].title}</a></li>);
    }
    return (
        <nav>
            <ol>
                {html}
            </ol>
        </nav>
    )
}
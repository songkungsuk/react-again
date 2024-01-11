interface Props {
    onUpdate: Function;
    title: any;
    body: any;
}

export const Update = (prop: Props) => {
    return (
        <article>
            <h2>Update</h2>
            <form onSubmit={(event: any) => {
                event.preventDefault();
                const title = event.target.title.value;
                const body = event.target.body.value;
                prop.onUpdate(title, body);
            }}>
                <p><input type="text" name="title" placeholder="title" value={prop.title} /></p>
                <p><textarea name="body" placeholder="body" value={prop.body}></textarea></p>
                <p><input type="submit" value={'UPDATE'} /></p>
            </form>
        </article>
    )
}
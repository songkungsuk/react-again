interface Props{
    title:String;
    onChangeMode:Function;
}

export const Header = (prop:Props) =>{
    console.log(prop);
    return (
        <div>
            <header>
                <h1><a href="/" onClick={(event)=>{
                    event.preventDefault();
                    prop.onChangeMode();
                }}>{prop.title}</a></h1>
            </header>
        </div>
    )
}
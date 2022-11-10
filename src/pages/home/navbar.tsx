import LoginButton from 'components/Login';

function handleClick() {
    let ele = document.getElementById('section2');
    if(ele){
        ele.scrollIntoView();
    }
}

export default function ButtonAppBar() {
    return (
        <header>
            <h1 id="nav-title" className={"title"}>Echo MQ</h1>
            <nav>
                <ul>
                    <li><a type={"button"} onClick={handleClick} className="nav-items" href="/docs">Docs</a></li>
                    <li><a className="nav-items" href="/pricing">Pricing</a></li>
                </ul>
            </nav>
            <div className={'loginButton'}>
                <LoginButton />
            </div>
        </header>
    );
}

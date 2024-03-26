import {Button} from "@hilla/react-components/Button";
import {useSignal} from "@preact/signals-react";

function App() {

    const count = useSignal(0)

    return (
        <>
            <Button
                className="float-left"
                theme="icon"
                onClick={() => {
                    const theme = document.documentElement.getAttribute('theme')
                    if (theme === 'dark')
                        document.documentElement.setAttribute('theme', 'light')
                    else document.documentElement.setAttribute('theme', 'dark')
                }}>
                🕶️
            </Button>
            <div className='flex items-center justify-center h-screen'>
                <Button
                    onClick={() => count.value++}
                >
                    Count : {count}
                </Button>
            </div>
        </>
    )
}

export default App

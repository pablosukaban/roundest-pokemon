import type {NextPage} from 'next'

const Home: NextPage = () => {
    return (
        <div className={'h-screen w-screen flex flex-col justify-center items-center'}>
            <h1 className={'text-2xl text-center'}>Кто из покемонов более круглый?</h1>
            <div className={'p-2'}/>
            <div className={'flex justify-between items-center border rounded max-w-2xl  p-12'}>
                <div className={'w-16 h-16 bg-red-300 rounded '}/>
                <div className={'p-8'}>VS</div>
                <div className={'w-16 h-16 bg-green-300 rounded'}/>
            </div>
        </div>
    )
}

export default Home

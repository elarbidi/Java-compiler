import Compiler from './component/compiler';

export default function Home() {
    return (
        <>
                    <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Online Java Compiler</h1>
                    <Compiler />
        </>
    );
}

import { Taskbar } from 'charios';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<div className="flex flex-row justify-center items-center h-screen">
			<h1 className="text-4xl text-white font-bold shadow-2xl p-10 rounded-2xl">
				Hello world
			</h1>
			<Taskbar content="test" />
		</div>
	);
};

export default Home;

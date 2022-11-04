
/**
 * This is the welcome screen that is shown when the user first opens the site.
 * We need sexy animations here.
 */
const WelcomeScreen = () => {
	return (
		<div className="flex flex-row justify-center items-center h-screen w-screen bg-gradient-to-bl from-[#eb641e] to-[#964300]">
			<div className="text-5xl text-white bg-black p-24 rounded-2xl bg-opacity-60">
				Royal Holloway Computing Society
			</div>
		</div>
	)
};

export default WelcomeScreen;

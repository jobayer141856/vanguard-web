import { useForm } from "react-hook-form";
import logo from "../../../assets/logo.png";
import authImage from "../../../assets/authimage.png";
import { Link } from "react-router";

const VerifyCode = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		// Combines the 6 individual inputs into a single code string
		const verificationCode = `${data.code1}${data.code2}${data.code3}${data.code4}${data.code5}${data.code6}`;
		console.log("Submitted Code:", verificationCode);
		// Add your verification logic here
	};

	// Handle auto-focusing to the next/previous input box
	const handleKeyUp = (e, index) => {
		const currentInput = e.target;

		if (e.key !== "Backspace" && currentInput.value.length === 1) {
			const nextInput = document.querySelector(
				`input[name='code${index + 1}']`,
			);
			if (nextInput) nextInput.focus();
		} else if (e.key === "Backspace" && currentInput.value.length === 0) {
			const prevInput = document.querySelector(
				`input[name='code${index - 1}']`,
			);
			if (prevInput) prevInput.focus();
		}
	};

	return (
		<div className="min-h-screen flex flex-col md:flex-row bg-white">
			{/* Left Side: Verify Code Form */}
			<div className="w-full md:w-1/2 flex flex-col p-8 lg:p-12 xl:p-16 relative">
				{/* Logo */}
				<div className="absolute top-8 left-8 lg:top-12 lg:left-12">
					<Link to="/" className="btn btn-ghost flex items-end">
						<img src={logo} alt="Logo" className="h-12 w-auto" />
						<h1 className="text-2xl font-bold text-black -ml-3.5">
							VanGuard
						</h1>
					</Link>
				</div>

				{/* Form Container */}
				<div className="flex-1 flex items-center justify-center mt-20 md:mt-0">
					<div className="max-w-md w-full">
						<h1 className="text-3xl md:text-4xl font-extrabold text-[#111] mb-2">
							Enter Code
						</h1>
						<p className="text-gray-500 mb-8 text-sm md:text-base">
							Enter 6 digit code that we sent in your email
							address
						</p>

						<form
							onSubmit={handleSubmit(onSubmit)}
							className="space-y-6"
						>
							{/* 6-Digit Code Inputs */}
							<div className="flex justify-between gap-2 md:gap-3">
								{[1, 2, 3, 4, 5, 6].map((num) => (
									<input
										key={num}
										type="text"
										maxLength="1"
										placeholder="6"
										className={`input input-bordered w-12 h-12 md:w-14 md:h-14 text-center text-lg md:text-xl font-bold focus:outline-none focus:border-gray-400 placeholder-gray-300 ${
											errors[`code${num}`]
												? "input-error"
												: ""
										}`}
										{...register(`code${num}`, {
											required: true,
											pattern: /^[0-9]$/, // Ensures only numbers are accepted
										})}
										onKeyUp={(e) => handleKeyUp(e, num)}
									/>
								))}
							</div>

							{/* Error message if any box is missed */}
							{Object.keys(errors).some((key) =>
								key.startsWith("code"),
							) && (
								<p className="text-error text-sm text-center">
									Please enter a valid 6-digit code.
								</p>
							)}

							{/* Verify Button */}
							<button
								type="submit"
								className="btn w-full bg-[#d1f366] hover:bg-[#c5ea4c] text-black border-none mt-4 font-bold"
							>
								Verify Code
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* Right Side: Illustration */}
			<div className="hidden md:flex w-full md:w-1/2 bg-[#f6f9ec] items-center justify-center p-12">
				<img
					src={authImage}
					alt="Delivery service illustration"
					className="w-full max-w-lg object-contain"
				/>
			</div>
		</div>
	);
};

export default VerifyCode;

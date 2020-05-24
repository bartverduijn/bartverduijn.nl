import React from 'react';

export default function Header() {
	return (
		<header className="flex justify-between items-center mt-10">
			<h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 font-medium md:font-normal leading-none">
				Bart Verduijn
			</h1>
			<button type="button">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 6H22V7H2V6ZM2 12H22V13H2V12ZM22 18H2V19H22V18Z"
						className="fill-current text-gray-900"
					/>
				</svg>
			</button>
		</header>
	);
}

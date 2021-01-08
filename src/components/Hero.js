import React from 'react';
import styled from 'styled-components';
import FixedImage from './FixedImage';

const StyledHero = styled.div`
	margin-top: 32px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 64px;
	align-items: center;

	.text {
		grid-column: span 2;
	}

	h2 {
		margin: 0;
		font-size: 48px;
		line-height: 1.2;
		font-weight: 900;
		font-family: 'Playfair Display';
		color: var(--color-gray-800);
	}

	h3 {
		margin: 8px 0;
		font-size: 36px;
		line-height: 1.4;
		font-weight: 300;
		color: var(--color-gray-400);
	}
`;

const ContactInfo = styled.div`
	margin-top: 40px;
	display: flex;
	align-items: center;

	a {
		margin-right: 24px;
	}

	svg {
		height: 40px;
		width: 40px;
		color: var(--color-gray-300);

		&:hover {
			color: var(--color-gray-800);
		}
	}
`;

export default function Hero() {
	return (
		<StyledHero>
			<div className="text">
				<h2>Hi! Ik ben Bart Verduijn, en ik ben bruggenbouwer.</h2>
				<h3>
					Ik haal energie uit het verbinden van mensen en technologie.
				</h3>
				<ContactInfo>
					<a>
						<svg viewBox="0 50 512 512">
							<path
								fill="currentColor"
								d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683
        C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z
        M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615
        c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915
        s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"
							/>
						</svg>
					</a>
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fillRule="evenodd"
							strokeLinejoin="round"
							strokeMiterlimit="2"
							clipRule="evenodd"
							viewBox="0 0 755 736"
						>
							<defs />
							<path
								fill="currentColor"
								d="M377.04.004C168.845.004.003 168.824.003 377.11c0 166.574 108.032 307.917 257.87 357.778 18.866 3.45 25.741-8.194 25.741-18.171 0-8.958-.324-32.662-.51-64.144-104.884 22.801-127.013-50.532-127.013-50.532-17.153-43.565-41.875-55.162-41.875-55.162-34.236-23.403 2.592-22.917 2.592-22.917 37.848 2.662 57.755 38.843 57.755 38.843 33.634 57.639 88.264 40.995 109.746 31.342 3.425-24.375 13.17-40.995 23.935-50.416-83.727-9.514-171.76-41.876-171.76-186.367 0-41.157 14.7-74.814 38.82-101.18-3.89-9.537-16.829-47.87 3.703-99.792 0 0 31.644-10.139 103.681 38.657 30.07-8.356 62.338-12.546 94.398-12.685 32.038.14 64.283 4.329 94.399 12.685 71.99-48.796 103.588-38.657 103.588-38.657 20.579 51.921 7.639 90.255 3.773 99.792 24.167 26.366 38.75 60.023 38.75 101.18 0 144.862-88.171 176.737-172.153 186.066 13.519 11.643 25.579 34.652 25.579 69.838 0 50.416-.463 91.088-.463 103.449 0 10.07 6.805 21.806 25.926 18.125 149.722-49.954 257.662-191.204 257.662-357.732C754.147 168.824 585.304.004 377.04.004z"
							/>
						</svg>
					</a>
					<a>
						<svg
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</a>
				</ContactInfo>
			</div>
			<FixedImage imageName="Avatar.png" />
		</StyledHero>
	);
}

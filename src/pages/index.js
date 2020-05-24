import React from 'react';
import Layout from '../components/Layout';
// import SEO from '../components/seo';

export default function IndexPage() {
	return (
		<Layout>
			{/* <SEO title="Home" /> */}
			<main className="text-lg sm:text-xl md:text-2xl md:font-light text-gray-700">
				<p className="mt-10">
					Ik ben Bart. Ik ben 25 jaar oud, en op dit moment ben ik
					werkzaam als Functioneel Applicatie Manager bij DAF Trucks
					N.V.. Toen ik 2 jaar geleden deze website maakte, was ik net
					een paar maanden in dienst bij Brunel. Ik had net mijn
					eerste (korte) opdracht voltooid, en daarom zat ik tussen
					twee opdrachten in op de zogenaamde 'bank', op zoek naar
					mijn volgende uitdaging.
				</p>
				<p className="mt-6 sm:mt-8 md:mt-10">
					Sindsdien is er veel veranderd, ben ik veel veranderd. Ik
					ben weer heel wat certificeringen verder, en ik heb
					ondertussen weer een stukje meer ervaring in het werkveld
					dan dat ik twee jaar geleden had. Maar niet alleen op
					professioneel gebied is alles anders. Ik woon op nu mezelf,
					ik draag opeens witte overhemden naar mijn werk (mits ik
					niet in thuisquarantaine zit), ik lust opeens koffie (wat
					onhandig is met diezelfde witte overhemden) en ik heb zelfs
					mijn vriendin aan de haak weten te slaan. Wat niet veranderd
					is, is dat ik mezelf nog regelmatig de vraag stel die ik
					destijds ook had: Wat wil ik eigenlijk worden als ik later
					groot ben?
				</p>
				<p className="mt-6 sm:mt-8 md:mt-10">
					Nu zal ik die vraag anders beantwoorden dan dat ik twee jaar
					geleden deed. Mijn antwoord? Ik word bruggenbouwer. Ik wil
					graag bruggen bouwen tussen mensen onderling. Ik wil met ze
					meedenken en ze zelf het gevoel geven dat we samen tot een
					mooi eindproduct kunnen komen. En ik wil bruggen bouwen
					tussen mens en technologie. Hoe kan ik met mijn kennis
					ervoor zorgen dat jouw werk net een stukje makkelijker
					wordt, en jouw dag net een beetje leuker. Als ik later groot
					ben, word ik bruggenbouwer.
				</p>
			</main>
		</Layout>
	);
}

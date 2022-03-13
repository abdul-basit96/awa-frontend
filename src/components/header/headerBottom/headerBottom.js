import React from 'react';
import { Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import './styles.css';
const HeaderBottom = () => {
	return (
		<Container fluid className="px-0">
			<div className="py-3 top-marquee-div">
				<Marquee direction="right" pauseOnHover="true" gradientColor={'none'}>
					<strong>
						بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ نٓ ۚ وَٱلْقَلَمِ وَمَا يَسْطُرُونَ مَآ أَنتَ بِنِعْمَةِ
						رَبِّكَ بِمَجْنُونٍۢ وَإِنَّ لَكَ لَأَجْرًا غَيْرَ مَمْنُونٍۢ وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍۢ
						فَسَتُبْصِرُ وَيُبْصِرُونَ بِأَييِّكُمُ ٱلْمَفْتُونُ إِنَّ رَبَّكَ هُوَ أَعْلَمُ بِمَن ضَلَّ عَن
						سَبِيلِهِۦ وَهُوَ أَعْلَمُ بِٱلْمُهْتَدِينَ فَلَا تُطِعِ ٱلْمُكَذِّبِينَ وَدُّوا۟ لَوْ تُدْهِنُ
						فَيُدْهِنُونَ وَلَا تُطِعْ كُلَّ حَلَّافٍۢ مَّهِينٍ هَمَّازٍۢ مَّشَّآءٍۭ بِنَمِيمٍۢ مَّنَّاعٍۢ
						لِّلْخَيْرِ مُعْتَدٍ أَثِيمٍ عُتُلٍّۭ بَعْدَ ذَٰلِكَ زَنِيمٍ أَن كَانَ ذَا مَالٍۢ وَبَنِينَ
						إِذَا تُتْلَىٰ عَلَيْهِ ءَايَـٰتُنَا قَالَ أَسَـٰطِيرُ ٱلْأَوَّلِينَ سَنَسِمُهُۥ عَلَى
						ٱلْخُرْطُومِ إِنَّا بَلَوْنَـٰهُمْ كَمَا بَلَوْنَآ أَصْحَـٰبَ ٱلْجَنَّةِ إِذْ أَقْسَمُوا۟
						لَيَصْرِمُنَّهَا مُصْبِحِينَ وَلَا يَسْتَثْنُونَ
					</strong>
				</Marquee>
			</div>
		</Container>
	);
};

export default HeaderBottom;

import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/포에틱AI.png';
import Image2 from 'assets/img/명품도시한양.png';
import Image3 from 'assets/img/꿈속의자연.png';
import Image4 from 'assets/img/동대문역사관.png';

export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="이달의 축제 & 행사"></Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="[전시] 포에틱 AI"
                        position="2022.04.07 ~ 2022.10.06"
                    />
                    <TeamCard
                        img={Image2}
                        name="[전시] 명품도시 한양 보물 100선"
                        position="2022.05.20 ~ 2022.08.27"
                    />
                    <TeamCard
                        img={Image3}
                        name="[전시] The Color Spot:꿈속의 자연"
                        position="2022.01.11 ~ 2022.09.30"
                    />
                    <TeamCard
                        img={Image4}
                        name="[전시] 동대문역사관 상설전시실"
                        position="2020.08.11 ~ (계속)"
                    />
                </div>
            </div>
        </section>
    );
}
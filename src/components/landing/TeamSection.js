import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/bukchon.jpg';
import Image2 from 'assets/img/seoul-museum-of-history.jpg';
import Image3 from 'assets/img/street.jpg';
import Image4 from 'assets/img/pexels-ethan-brooke-2376710.jpg';

export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="이달의 추천 코스">
                    매달 서울 곳곳에서 진행하는 행사와 이벤트 등을 소개
                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="/////"
                        position="/////"
                    />
                    <TeamCard
                        img={Image2}
                        name="/////"
                        position="/////"
                    />
                    <TeamCard
                        img={Image3}
                        name="/////"
                        position="////"
                    />
                    <TeamCard
                        img={Image4}
                        name="////"
                        position="////"
                    />
                </div>
            </div>
        </section>
    );
}

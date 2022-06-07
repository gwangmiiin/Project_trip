import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';
import Form from 'components/landing/Form';
import { Link } from 'react-router-dom';

export default function ContactSection() {
    return (
        <section className="pb-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                <Title heading="서울의 삼거리">
                    서울을 구경할 수 있는 삼거리 입니다. <br />
                    다양한 거리들을 둘러보세요!
                </Title>

                <div className="flex flex-wrap -mt-12 justify-center">
                    <ContactCard title="볼거리">
                       <Link to='/profile#' >
                        눈이 즐거운 서울의 <br />
                        다양한 볼거리들을 구경하세요.<br />
                        (클릭시 이동합니다.)
                        </Link>
                    </ContactCard>
                    <ContactCard title="먹거리">
                        <Link to='/'>
                        입이 즐거운 서울의 <br />
                        다양한 먹거리들을 구경하세요. <br />
                        (클릭시 이동합니다.)
                        </Link>
                    </ContactCard>
                    <ContactCard  title="놀거리">
                    <Link to='/'>
                        몸이 즐거운 서울의 <br />
                        다양한 놀거리들을 구경하세요. <br />
                        (클릭시 이동합니다.)
                    </Link>
                    </ContactCard>
                </div>

                <Form />
            </div>
        </section>
    );
}
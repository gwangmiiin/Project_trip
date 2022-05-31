import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';
import Form from 'components/landing/Form';

export default function ContactSection() {
    return (
        <section className="pb-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                <Title heading="서울의 삼거리">
                    Put the potentially record low maximum sea ice extent tihs
                    year down to low ice. According to the National Oceanic and
                    Atmospheric Administration, Ted, Scambos.
                </Title>

                <div className="flex flex-wrap -mt-12 justify-center">
                    <ContactCard title="볼거리">
                       <a href ="http://localhost:3000/profile">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        </a>
                    </ContactCard>
                    <ContactCard title="먹거리">
                    <a href = "http://localhost:3000/profileFood">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </a>
                    </ContactCard>
                    <ContactCard  title="놀거리">
                    <a href="http://localhost:3000/profilePlay">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </a>
                    </ContactCard>
                </div>

                <Form />
            </div>
        </section>
    );
}
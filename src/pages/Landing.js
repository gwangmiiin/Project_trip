import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import TeamSection from 'components/landing/TeamSection';
import ContactSection from 'components/landing/ContactSection';

export default function Landing() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <TeamSection />
                <ContactSection />
            </main>
            <DefaultFooter />
        </>
    );
}

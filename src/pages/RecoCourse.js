import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import ContentRecoCourse from 'components/reco_course/ContentRecoCourse';

export default function RecoCourse() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <ContentRecoCourse />
            </main>
            <DefaultFooter />
        </>
    );
}

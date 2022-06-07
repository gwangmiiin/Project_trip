import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import ContentRecoCourse from 'components/reco_course/ContentRecoCourse';
import Commend from 'components/reco_course/Commend';

export default function RecoCourse() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
            </main>
                <ContentRecoCourse />
                <Header />
                <Commend />
            <DefaultFooter />
        </>
    );
}
import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import Recocourse2 from 'components/reco_course/Recocourse2';


export default function Course2() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <Recocourse2 />
            </main>
            <DefaultFooter />
        </>
    );
}
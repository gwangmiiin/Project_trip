import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import Recocourse3 from 'components/reco_course/Recocourse3';


export default function Course3() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <Recocourse3 />
            </main>
            <DefaultFooter />
        </>
    );
}
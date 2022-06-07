import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import Recocourse1 from 'components/reco_course/Recocourse1';


export default function Course1() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <Recocourse1 />
             </main>
            <DefaultFooter />
        </>
    );
}
import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import ContentPlay from 'components/profile_play/ContentPlay';
import ContentPlay2 from 'components/profile_play/ContentPlay2';
import ContentPlay3 from 'components/profile_play/ContentPlay3';
import ContentPlay4 from 'components/profile_play/ContentPlay4';
import ContentPlay5 from 'components/profile_play/ContentPlay5';


export default function ProfilePlay() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <ContentPlay />
                <Header />
                <ContentPlay2 />
                <Header />
                <ContentPlay3 />
                <Header />
                <ContentPlay4 />
                <Header />
                <ContentPlay5 />
            </main>
            <DefaultFooter />
        </>
    );
}

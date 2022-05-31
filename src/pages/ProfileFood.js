import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import ContentFood from 'components/profile_food/ContentFood';
import ContentFood2 from 'components/profile_food/ContentFood2';
import ContentFood3 from 'components/profile_food/ContentFood3';
import ContentFood4 from 'components/profile_food/ContentFood4';
import ContentFood5 from 'components/profile_food/ContentFood5';
import ContentFood6 from 'components/profile_food/ContentFood6';

export default function ProfileFood() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <ContentFood />
                <Header />
                <ContentFood2 />
                <Header />
                <ContentFood3 />
                <Header />
                <ContentFood4 />
                <Header />
                <ContentFood5 />
                <Header />
                <ContentFood6 />
            </main>
            <DefaultFooter />
        </>
    );
}

import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import Content from 'components/profile/Content';
import Content1 from 'components/profile/Content1';
import Content2 from 'components/profile/Content2';
import Content3 from 'components/profile/Content3';
import Content4 from 'components/profile/Content4';
import Content5 from 'components/profile/Content5';
import Content6 from 'components/profile/Content6';
import Content7 from 'components/profile/Content7';
import Content8 from 'components/profile/Content8';
//import HeaderTop from 'components/profile/HeaderTop';
//import HeaderName from 'components/profile/HeaderName';

export default function Profile() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <Content />
                <Header />
                <Content1 />
                <Header />
                <Content2 />
                <Header />
                <Content3 />
                <Header />
                <Content4 />
                <Header />
                <Content5 />
                <Header />
                <Content6 />
                <Header />
                <Content7 />
                <Header />
                <Content8 />
                <Header />
            </main>
            <DefaultFooter />
        </>
    );
}

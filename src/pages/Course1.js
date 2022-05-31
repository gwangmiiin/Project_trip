import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import Image from '@material-tailwind/react/Image';
import ProfilePicture from 'assets/img/기본여행자코스-001.png';


export default function Course1() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                     <Image
                        src={ProfilePicture}
                        alt="Profile picture"
                        raised
                    />

            </main>
            <DefaultFooter />
        </>
    );
}
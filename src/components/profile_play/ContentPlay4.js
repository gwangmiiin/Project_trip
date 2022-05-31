import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/아이스링크.png';

export default function ContentPlay4() {
    return (
        <>
        <section className="relative py-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <div className="w-80 -mt-20">
                                        <Image
                                            src={ProfilePicture}
                                            alt="Profile picture"
                                            raised
                                            rounded
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                                <Button color="lightBlue" ripple="light">
                                    Conntect
                                </Button>
                            </div> */}
                        </div>

                        <div className="text-center my-8">
                            <H3 color="gray">롯데월드 아이스링크</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                서울 송파구 올림픽로 240 
                            </div>
                            <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                            <Icon name="keyboard_arrow_right" size="xl" />
                               3호선 안국 6번 출구 / 1호선 종각 3번 출구
                            </div>
                            
                        </div>


                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                    롯데월드 아이스링크는 잠실 롯데월드 실내에 자리해 있다. 아이스링크 둘레에는 총 850석의 편안한 좌석이 구비되어 있으며 세계 각국의 요리를 맛볼 수 있는 식당가와 전자오락실 등의 다양한 시설이 함께 조성되어 있다. 피겨스케이트, 스피드스케이트의 강습도 진행하고 있다.
                                    </LeadText>
                                    <a
                                    
                                    href="https://adventure.lotteworld.com/icerink/main/index.do"
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                    <Button
                                        color="lightBlue"
                                        buttonType="link"
                                        ripple="dark"
                                    >
                                        웹 사이트로 보기
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
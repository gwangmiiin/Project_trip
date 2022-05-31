import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/두레한식당.png';

export default function ContentFood3() {
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
                        </div>

                        <div className="text-center my-8">
                            <H3 color="gray">두레한식당</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                서울 송파구 올림픽로 300 (신천동)  롯데백화점 에비뉴엘 월드파타워점 6F     
                            </div>
                            <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                            <Icon name="keyboard_arrow_right" size="xl" />
                                8호선 잠실역 2번출구 도보 3분
                            </div>
                            
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                <LeadText color="blueGray">
                                60여 년 전 경남 밀양에서 개업한 이래, 인사동에서 2대에 걸쳐 명맥을 이어온 유명 한정식 레스토랑이다. 제철 식재료로 만든 정갈하고 깔끔한 한정식 코스와 일품요리를 제공한다. 한식이 익숙지 않은 외국 관광객이라면 석쇠에 구운 떡갈비 메뉴, 산채비빔밥 반상 등을 추천한다.
                                </LeadText>
                                <a
                                    
                                    href="https://map.naver.com/v5/entry/place/36693327?c=14148871.2790385,4510815.0542645,13,0,0,0,dh&placePath=%2Fhome&entry=plt"
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                    <Button
                                        color="lightBlue"
                                        buttonType="link"
                                        ripple="dark"
                                    >
                                        상세보기
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
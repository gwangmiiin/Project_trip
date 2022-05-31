import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/롯데월드타워.png';

export default function Content4() {
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
                            <H3 color="gray">롯데월드타워</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                서울 송파구 올림픽로 300 (신천동)   
                            </div>
                            <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                            <Icon name="keyboard_arrow_right" size="xl" />   
                                2호선 잠실역 2번 출구 도보 5분 / 8호선 잠실역 11번 출구 도보 5분
                    </div>
                    
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                    글로벌 상징성과 한국의 전통미, 인간과 기술, 첨단과 자연이 공존하는 롯데월드타워는 하나의 건축물에 도시생활의 모든 것을 구현한 수직도시이다. 

                                    </LeadText>
                                    <LeadText color="blueGray">
                                    555m, 123층의 거대한 수직도시 롯데월드타워에는 국내 최고 높이(500m) 전망대인 서울스카이(SEOUL SKY), 국내 최고 수준의 호텔 시그니엘서울(SIGNIEL SEOUL), 프리미엄 헬스케어센터와 피트니스센터, 파이낸스센터가 입점한 포디엄이(PODIUM) 위치하여 그 높이만큼 특별한 가치를 경험할 수 있다.

                                    </LeadText>
                                    <LeadText color="blueGray">
                                    또한 글로벌 패션 허브 롯데월드몰에는 국내 최대 규모의 시내 면세점인 롯데면세점, 대한민국 최고, 최대의 명품 백화점 에비뉴엘, 국내 최대 도심형 수족관 롯데월드 아쿠아리움, 국내 최초 빈야드 스타일 클래식 전용 홀인 롯데콘서트홀과 아시아 최대 규모의 멀티플렉스 롯데시네마 등이 자리하여 첨단 라이프스타일과 놀랍고 차별화된 경험을 할 수 있다.

                                    </LeadText>
                                    <a
                                    
                                    href="https://www.lwt.co.kr/ko/main/main.do"
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
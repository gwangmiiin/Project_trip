import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/몽촌역사관.png';

export default function Content6() {
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
                            <H3 color="gray">몽촌역사관</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                서울 송파구 올림픽로 424 (몽촌역사관)  
                            </div>
                            <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                            <Icon name="keyboard_arrow_right" size="xl" />
                                5호선 올림픽공원역 3번 출구 / 
                                 8호선 몽촌토성역 1번 출구
                            </div>
                            
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                    올림픽공원 내에 위치한 몽촌역사관은 백제시대 대표적인 유적 들을 볼 수 있는 곳으로 몽촌토성과 풍납토성의 출토물도 전시하고 있다. 한성백제박물관의 부속시설로 다양한 체험 교실과 프로그램을 운영하는 교육체험형 박물관을 추구하고 있다. 매주 목요일 저녁 4시에는 꿈나무영화마당을 상영한다.
                                    </LeadText>
                                    <LeadText color="blueGray">
                                    몽촌토성의 동문 남쪽 성벽 위에는 움집터전시관이 있다. 1988년에 발견된 4개의 움집터와 저장구덩이를 발굴 조사하여 당시의 모습 그대로 전시한 곳이다. 백제의 육각형 움집으로 온돌형태의 화덕시설이 잘 남아있다.
                                    </LeadText>
                                    <a
                                    
                                    href="https://baekjemuseum.seoul.go.kr/dreamvillage/"
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
import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/전쟁기념관.png';

export default function Content7() {
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
                            <H3 color="gray">전쟁기념관</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                서울 용산구 이태원로 29 (용산동1가, 전쟁기념관)  
                            </div>
                            <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                            <Icon name="keyboard_arrow_right" size="xl" />
                            6호선 삼각지역 11번, 12번 출구 (도보 3분) / 4호선 삼각지역 1번 출구 (도보 5분) / 1호선 남영역 1번 출구 (도보 10분)
                            </div>

                            
                        </div>
                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                    전쟁기념관에 들어서면 '형제의 상'이 가장 먼저 눈에 들어온다. 현대사의 슬픔을 고스란히 보여준다. 너른 광장을 지나 기념관을 향한다. 1층 전시실에는 선사 시대부터 6.25전쟁까지 그 역사가 모형으로 꾸며져 있다. 모형과 더불어 2층과 3층에는 전시 자료들도 준비되어 있다. 전쟁체험실은 전쟁의 극한 상황을 다양한 감각으로 체험하는 공간이다. 전쟁기념관은 옥외 전시장도 들러볼 만하다. 제2차 세계대전, 6.25전쟁, 베트남전쟁 등에 사용되었던 무기를 전시한다. 반면 기념 조형물은 무기가 아닌 전쟁의 참상이나 아픔을 조명한다. 대형 총알 모양의 ‘6.25전쟁 휴전 50주년 기념 조형물’, 국군 전사자 명비는 마음을 숙연하게 만든다. 시민들은 전쟁기념관에서 전쟁의 희생자들과 평화의 의미를 되새기며 그 터전 위에 우리의 삶이 지속되고 있음을 상기하게 된다.
                                    </LeadText>
                                    <a
                                    
                                    href="https://www.warmemo.or.kr/front/main.do;jsessionid=F4C125837768EEB1F324BDE2157174F1"
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
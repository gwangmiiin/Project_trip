import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/changgyeonggung-palace-551221_1920.jpg';

export default function Content1() {
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
                            <H3 color="gray">창덕궁</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                            <Icon name="place" size="xl" />
                                서울 종로구 율곡로 99 (와룡동, 창덕궁) 
                            </div>
                            <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                            <Icon name="keyboard_arrow_right" size="xl" />
                                5호선 종로3가역 6번 출구 도보 10분 / 3호선 안국역 3번 출구 도보 5분
                            </div>
                           
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                    창덕궁은 서울에서 두 번째로 유네스코 선정 세계문화유산으로 등재되었다. ‘동아시아 궁전 건축사에 있어 비정형적 조형미를 간직한 대표적 궁으로 주변 자연환경과의 완벽한 조화와 배치가 탁월하다’는 이유로 선정됐다. 창덕궁은 1405년 태종에 의해 세워졌으며, 오랜 시간 법궁(法宮)의 역할을 한 궁궐이다.
                                    </LeadText>
                                    <LeadText color="blueGray">
                                    조선은 임진왜란을 겪으면서 경복궁과 창덕궁을 모두 잃었다. 광해군 2년(1610)에 재건된 창덕궁은 약 270년간 조선의 법궁으로 쓰였다.
                                    </LeadText>
                                    <LeadText color="blueGray">
                                    창덕궁은 크게 두 가지 관람 프로그램을 가진다. 첫 번째는 일반 관람이다. 정전인 인정전(仁政殿)을 중심으로 낙선재(樂善齋)까지 아우르는 기본적인 관람 코스다. 두 번째는 후원 특별 관람으로 후원의 초입 부용지에서 후원의 백미 옥류천에 이르는 코스다.  생태계의 보존 상태가 좋고 연못과 정원 등에는 차경의 흔적이 두드러진다.
                                    </LeadText>
                                    <LeadText color="blueGray">
                                    ※ 정부 방역지침에 따라 운영 여부 및 사전 예약이 필요할 수 있으니, 사전 확인 후 방문해 주세요.   
                                    </LeadText>
                                    <a
                                    
                                    href="http://www.cdg.go.kr/default.jsp"
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
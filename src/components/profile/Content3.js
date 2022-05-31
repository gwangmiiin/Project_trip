import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/서대문형무소.png';

export default function Content3() {
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
                            <H3 color="gray">서대문형무소역사관</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                서울 서대문구 통일로 251 (현저동, 독립공원)  
                            </div>
                            <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                            <Icon name="keyboard_arrow_right" size="xl" />
                               3호선 독립문 5번 출구 도보 10분
                            </div>
                           
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                    서대문형무소는 현존하는 건축물 중 유일한 일본풍 목조 건물이다. 1923년 지은, 사형 선고를 받고 투옥된 전국의 애국지사들이 이감 후 생을 마감한 장소다. 형무소는 죄인들을 감금하는 곳이지만, 서대문형무소에서 온갖 고초를 당한 이들은 목숨을 바칠 만큼 나라를 사랑한 애국지사들이었다. 서대문형무소를 걷는 내내 얼굴도 모르는 그들의 모습이 떠나지 않았다. 서대문형무소는 전시관, 중앙사, 12옥사, 공작사, 한센병원, 순국선열추모비, 사형장과 시구문, 유관순 지하 옥사, 담장과 망루의 순으로 관람한다. 전시 공간을 두루 돌아보고 나오면 강우규, 안창호, 유관순 열사 등 순국열사의 이름을 기록한 추모비가 눈에 띈다. 채 100년도 되지 않은 지난날의 기록이다. 서대문형무소역사관은 과거의 의미를 아로새겨 부끄럽지 않은 미래를 준비하는 역사의 장이다.
                                    </LeadText>
                                    <a
                                    
                                    href="https://sphh.sscmc.or.kr/"
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
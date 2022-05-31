import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/삼청동 골목길.png';

export default function Content2() {
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
                            <H3 color="gray">북촌한옥마을</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                            <Icon name="place" size="xl" />
                                서울특별시 종로구 계동길 37
                            </div>
                            <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                            <Icon name="keyboard_arrow_right" size="xl" />
                                3호선 안국역 2번출구
                            </div>
                            
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                    경복궁과 창덕궁, 금원(비원) 사이 북악산 기슭에 있는 한옥 보존지구로 청계천과 종로의 윗동네라는 뜻으로 북촌이라고도 한다. 북촌은 고관대작들과 왕족, 사대부들이 모여서 거주해온 고급 살림집터로 한옥은 모두 조선시대의 기와집이다.
                                    </LeadText>
                                    <LeadText color="blueGray">
                                    두 조선시대의 기와집이다.원래 이 지역에는 솟을대문이 있는 집 몇 채와 30여 호의 한옥만이 있었으나 일제강점기 말부터 한옥이 많이 지어졌고, 1992년 가회동한옥보존지구에서 해제되고, 1994년 고도제한이 풀리면서 일반 건물들이 많이 들어섰다. 총 2,297동의 건물이 있는데, 이 가운데 1,408동이 한옥이고 나머지는 일반 건물이다.
                                    </LeadText>
                                    <LeadText color="blueGray">
                                    북촌 거리에는 북촌양반생활문화전시관과 북촌 한옥촌 상징조형물을 설치되어 있고, 옛 선조의 생활모습을 구경할 수 있는 가회동 전통 마을축제가 열린다. 주변에 경복궁 창덕궁 덕수궁 금원 삼청공원 국립중앙박물관 등의 관광지가 있다.내용 더보기

                                    </LeadText>
                                    <a
                                    
                                    href="https://hanok.seoul.go.kr/front/index.do"
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
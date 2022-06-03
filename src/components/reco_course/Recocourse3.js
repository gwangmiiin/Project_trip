import Image from '@material-tailwind/react/Image';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/미식가코스.png';
import Icon from '@material-tailwind/react/Icon';
import H2 from '@material-tailwind/react/Heading3';

export default function Recocourse3() {
    return (
        <>
        <section className="relative py-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                                <div className="relative">
                                        <Image
                                            src={ProfilePicture}
                                            width="800"
                                            alt="Profile picture"
                                            raised
                                        />
                            </div>
                        </div>
                    
                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <H2 color="blue">
                                        ◈ 망원동 (망리단길)
                                    </H2>
                                    <LeadText color="bluegray">
                                        저렴하고 특색있는 맛집이 많아 신명소로 떠오르고있는 망원시장 인근골목<br />
                                        길거리 음식과 과일, 반찬 등 전통 시장 구경이 가능한 망원시장과 함께 TV속 음식전문 프로그램에서 추천하는 레스토랑과 카페까지 다양하게 분포
                                    </LeadText>
                                    <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                        <Icon name="place" size="xl" />
                                        이용방법 : 6호선 망원역 1번출구에서 도보로 이동 
                                    </div>

                                </div>
                            </div>
                        </div>

                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <H2 color="blue">
                                        ◈ 연남동 (경의선 숲길 / 연트럴파크)
                                    </H2>
                                    <LeadText color="bluegray">
                                        뉴욕의 센트럴파크와 닮았다 하여 '연트럴파크'라 불리는 경의선 숲길<br />
                                        방치됐던 기찻길을 공원으로 만들어 야경도 멋진 산책로로 바뀜 <br />
                                        주변에 맛집과 인증샷용 카페, 소품가게들이 자리잡아 서울 대표 핫플레이스로 급부상 <br />
                                    </LeadText>
                                    <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                        <Icon name="place" size="xl" />
                                        이용방법 : 홍대입구역 3, 4번출구에서 길게 연결됨
                                    </div>

                                    <div className="mb-10 py-2 border-t border-gray-200 text-center">
                                    <H2 color="orange">오전</H2>
                                    <LeadText color="bluegray">
                                        망리단길 - 성수동 카페거리
                                    </LeadText>
                                    </div>

                                    <div className="mb-10 py-2 border-gray-200 text-center">
                                    <H2 color="orange">오후</H2>
                                    <LeadText color="bluegray">
                                        연트럴파크 - 홍대거리
                                    </LeadText>
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
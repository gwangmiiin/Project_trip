import Image from '@material-tailwind/react/Image';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/로컬라이프코스.png';
import Icon from '@material-tailwind/react/Icon';
import H2 from '@material-tailwind/react/Heading3';
export default function Recocourse1() {
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
                                        ◈ 한강 공원 그늘막 이용 안내
                                    </H2>
                                    <LeadText color="bluegray">
                                    뜨거운 여름햇살을 피하고 휴식을 위하여 정해진 곳에서 그늘막을 설치 사용 가능
                                    </LeadText>
                                    <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                        <Icon name="place" size="xl" />
                                        이용방법 : 강공원 인근 대여소에서 그늘막 대여 후 지정장소 사용. 소형 그늘막(2M x 2M)만 허용. <br />
                                    </div>
                                    <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                    ※ 공원별 이용 지정장소 상이, 사전 공원안내소에서 확인 필요                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <H2 color="blue">
                                        ◈ 한강 공원 배달존 안내
                                    </H2>
                                    <LeadText color="bluegray">
                                        한강공원 내 지정장소에서 배달 음식을 인계 받아 즐길 수 있음
                                    </LeadText>
                                    <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                        <Icon name="place" size="xl" />
                                        이용방법 (배달존) : 뚝섬 한강공원 : 7호선 뚝섬유원지역 2번 출구 뚝섬 한강공원 안내센터 앞<br />
                                    </div>
                                    <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                    여의도 한강공원 : 5호선 여의나루역 2번출구 주차장 근처 미니스톱 편의점 앞
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <H2 color="blue">
                                        ◈ 배달음식과 치맥
                                    </H2>
                                    <LeadText color="bluegray">
                                    드라마 속 서울 음식하면 떠오르는 치맥(치킨과 맥주)는 서울사람의 대표 야식!<br />
                                    특색있는 치킨과 맥주의 조합과 피자와 소주의 조합!<br />
                                    주요 어플 : 배달의 민족, 요기요 <br />
                                    </LeadText>
                                    <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                        <Icon name="place" size="xl" />
                                        호텔 또는 숙소 안내데스크 문의 후 이용<br />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <H2 color="blue">
                                        ◈ 서울 한양도성(성곽길) 백악 구간
                                    </H2>
                                    <LeadText color="bluegray">
                                    서울 궁이 있는 구 도심지역을 둘러싼 서울 성곽을 따라 산책할 수 있는 하이킹 코스                                    
                                    </LeadText>
                                    <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                        <Icon name="place" size="xl" />
                                        이용 방법 : 혜화문에서 출발, 창의문까지 하이킹 구간은 4.7km (약 3시간 소요)
                                    </div>
                                    <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                    4호선 한성대입구역 5번 출구 도보 5분 혜화문까지 이동
                                    </div>
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
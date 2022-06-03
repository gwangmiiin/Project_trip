import Image from '@material-tailwind/react/Image';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/기본여행자코스-001.png';
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
                                        ◈ N서울타워와 남산 케이블카 / 남산공원
                                    </H2>

                                    <LeadText color="bluegray">
                                        산책, 레스토랑 및 전망대 등을 다양하게 즐길 수 있는 남산공원<br />
                                        남산 케이블카 - N서울타워 입구까지 케이블카로 왕복 이동가능
                                    </LeadText>
                                    <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                        <Icon name="place" size="xl" />
                                        이용방법 : 티켓 현장구매 가능 / 왕복 9,500원 
                                    </div>

                                    <LeadText color="bluegray">
                                        N서울타워 - 서울의 전경을 한눈에 내려다 볼 수 있는 전망대
                                    </LeadText>
                                    <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                        <Icon name="place" size="xl" />
                                        이용방법 : 티켓 현장구매 가능 / 전망대 입장 11,000원 
                                    </div>

                                    <H2 color="blue">
                                    ◈ 서울로 7017
                                    </H2>

                                    <LeadText color="bluegray">
                                        서울의 대표적 도시재생 명소로 오래된 고가도로와 시민의 산책로로 바뀜 <br />
                                        서울역 주변의 17개의 보행길과 레스토랑, 호텔, 체험공간으로 연결됨
                                    </LeadText>
                                    <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                        <Icon name="place" size="xl" />
                                        이용방법 : 서울역 2번 혹은 15번출구에서 도보이동 / 4호선 회현역 남대문시장과 연결되어있음
                                    </div>


                                    <div className="mb-10 py-2 border-t border-gray-200 text-center">
                                    <H2 color="orange">DAY 1</H2>
                                    <LeadText color="bluegray">
                                        북촌한옥마을 - 광장시장
                                    </LeadText>
                                    </div>

                                    <div className="mb-10 py-2 border-t border-gray-200 text-center">
                                    <H2 color="orange">DAY 2</H2>
                                    <LeadText color="bluegray">
                                        남산 케이블카 / N서울타워 - 서울로 7017 - 코엑스몰
                                    </LeadText>
                                    </div>

                                    <div className="mb-10 py-2 border-t border-gray-200 text-center">
                                    <H2 color="orange">DAY 3</H2>
                                    <LeadText color="bluegray">
                                        국립중앙박물관 - 이태원 - 반포한강공원
                                    </LeadText>
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
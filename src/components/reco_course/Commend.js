import Image from '@material-tailwind/react/Image';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/이태원.png';
//import Icon from '@material-tailwind/react/Icon';
import H2 from '@material-tailwind/react/Heading3';

export default function Commend() {
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
                                            width="950"
                                            alt="Profile picture"
                                            raised
                                        />
                                </div>
                            </div>
                    
                        <div className="mb-10 py-2 border-gray-200">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="bluegray">
                                        낯선 공기와 약간은 들뜬 기분. 한국을 떠나 외국 공항에 도착하면 느낄 수 있는 특유의 분위기가 그립다.
                                        오랫동안 참았던 이국에 대한 갈망이 넘친다면 이태원으로 가보자.</LeadText>
                                    <LeadText color="bluegray">
                                    서울은 이미 국제적인 도시다. 서울 거리 곳곳에서는 세계 각국의 문화가 넘실거린다. 그중에서도 이태원은 독보적인데, 이태원이 있는 용산 거리에 가면 이곳이 과연 한국인가 하는 의문이 들 정도로 많은 외국인과 이국적인 분위기가 가슴을 두근거리게 한다. 골목골목이 마치 해외여행을 하고 있는 듯, 착각을 불러일으키는 특별하고 이색적인 경험을 선물해 줄 이태원 맛집, 이태원 놀거리를 찾아 이태원으로 떠나보자.
                                    </LeadText>

                                    <div className="mb-10 py-2 border-t border-gray-200 text-center">
                                    <H2 color="black">용산공원</H2>
                                    <LeadText color="bluegray">
                                    이태원이 있는 용산에는 놀거리, 볼거리가 가득하다. 박물관, 미술관을 비롯해 미디어에 소개된 맛집, SNS 핫플 등 어느 한 곳만을 손에 꼽기 어려울 만큼 특색 있는 장소가 많다. 용산, 이태원에 갈 때면 수많은 곳 중 오늘의 베스트는 어디일까 하는 기대를 하게 된다. 그런데 최근 멋진 장소가 또 하나 생겼다고 한다.
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
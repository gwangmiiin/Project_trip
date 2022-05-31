import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/지화자.png';

export default function ContentFood2() {
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
                        </div>

                        <div className="text-center my-8">
                            <H3 color="gray">지화자</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                서울 종로구 자하문로 125 (청운동)    
                            </div>
                            <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                            <Icon name="keyboard_arrow_right" size="xl" />
                                3호선 경복궁역 3번출구 1711, 7016, 7018번 버스 이용
                            </div>
                          
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                    1991년부터 국가무형문화재가 직접 운영하는 지화자는 서울의 중심부에 위치한 고급 전통 한식당이다. 지화자는 한국 음식 문화의 본질인 궁중음식을 선보이는 최고급 레스토랑으로 높은 평판을 얻었으며, 600년의 조선 왕조의 역사가 고스란히 담긴 정갈하고 품위 있는 음식을 선보인다. MSG, 인공 향신료 등 어떠한 첨가물을 사용하지 않고 천연재료와 조선 왕실의 숙련된 조리법으로 내어지는 지화자의 요리는 매우 건강하고 영양이 풍부하다. 지화자(Jiwhaja)는 3대에 걸쳐 전 세계에 한국의 전통 음식문화, 한국의 궁중음식을 홍보하기 위해 노력해왔고 앞으로도 계속 이어갈 것이다.  
                                    </LeadText>
                                    <a
                                    
                                    href="https://map.naver.com/v5/entry/place/12782440?c=14133702.3475498,4521260.9218946,15,0,0,0,dh"
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                    <Button
                                        color="lightBlue"
                                        buttonType="link"
                                        ripple="dark"
                                    >
                                        상세보기
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
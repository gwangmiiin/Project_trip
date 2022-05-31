import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/통인시장.png';

export default function ContentFood() {
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
                            <H3 color="gray">통인시장</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                서울 종로구 자하문로15길 18  
                            </div>
                            <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                            <Icon name="keyboard_arrow_right" size="xl" />
                            3호선 경복궁역 2번 출구 → 2번 출구와 3번 출구 사이 도로를 따라 직진
                            </div>
                           
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                    세종마을은 추사 김정희 등 조선시대 예능인들이 모이는 중심지였으며 근대에도 이상 등 문인들이 활동하던 중심지였다. 일제강점기 일본인들을 위해 만들어진 공설시장이 모태이나 6.25이후 인구증가로 시장의 필요성이 높아져 현재처럼 물건을 사고파는 시장의 형태를 갖추게 되었다. 
                                    </LeadText>
                                    <LeadText color="blueGray">
                                    통인시장은 상권이 활성화된 곳으로 다른 전통시장의 벤치마킹 사례로 유명하며 특히 통인시장에서 자체 제작한 엽전은 통인시장만의 즐길 거리다. 엽전으로 환전함과 동시에 검은색 플라스틱 식판도 받게 되는데 이때부터 식판을 들고 다니면서 시장 곳곳을 다니며 음식을 먹을 수 있다. 단, 엽전은 가맹점에서만 사용 가능하다. 
                                    </LeadText>
                                    <a
                                    
                                    href="https://map.naver.com/v5/entry/place/13304131?c=14134262.0285909,4520366.5291815,13,0,0,0,dh&placePath=%2Fhome&entry=plt"
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
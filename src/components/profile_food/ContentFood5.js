import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/너드바.png';

export default function ContentFood5() {
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
                            <H3 color="gray">너드바 (Nerd Bar)</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                서울 용산구 이태원로17길 22 (이태원동)   
                            </div>
                            <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                            <Icon name="keyboard_arrow_right" size="xl" />
                                6호선 이태원역 1번출구 도보 5분
                            </div>
                           
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                <LeadText color="blueGray">
                                2AM 출신 가수이자 연기자인 임슬옹이 이태원에 오픈한 바이다. 짧게 줄여 ‘너드(nerd) 바’로 불리는 너드온어스는 이태원 골목 깊숙한 곳의 놀기 좋은 곳을 콘셉트로, 그만의 취향을 담뿍 담고 있다. 블루와 레드가 어우러진 독특한 조명과 신비로운 음악, ’고퀄리티‘ 안주 요리가 어우러진 곳으로 독특한 아티스트의 감성을 느낄 수 있다. 특히 루콜라에 말린 토마토와 리코타 치즈를 싸 먹는 ‘너드쌈’과 차돌박이를 아낌없이 넣은 칼칼한 맛의 ‘차돌박이 진짬뽕’은 많은 사람들이 찾는 메뉴이다. 옥상에 오르면 이태원의 전경이 한 눈에 들어온다.
                                </LeadText>
                                <a
                                    
                                    href="https://map.naver.com/v5/entry/place/37746348?c=14136636.0614102,4513980.7197508,13,0,0,0,dh&placePath=%2Fhome"
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
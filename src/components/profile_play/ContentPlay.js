import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/ONDO STUDIO.png';

export default function ContentPlay() {
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
                            <H3 color="gray">ONDO STUDIO</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                서울 종로구 북촌로5나길 114 (삼청동) 
                            </div>
                            <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                            <Icon name="keyboard_arrow_right" size="xl" />
                                3호선 안국역 2번 출구
                            </div>
                           
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                    삼청동 북촌 한옥마을에 위치하고 있는 세라믹 스튜디오 온도는 따뜻한 색감과 간결한 라인들로 표현하는도자기를 손으로 만들며 한옥에서의 온기 있는 라이프 스타일을 공유하고 있다. 온도에서는 매달 새로운 도예 수업을 진행한다. 정규 클래스와 원데이 클래스로 구성되어 'Ceramics for living'에 걸맞게 식기뿐만 아니라 일상에 녹아들 수 있는 오브제들을 만들 수 있다. 오롯이 나에게 집중할 수 있는 시간 속에서 세상에 하나뿐인 도자기를 만들어 보자. 사람이 마주 보고 앉은 여백에 다정한 대화가 담기고 따스한 정이 담기듯이, 도자기와 함께 어우러진 당신의 공간에 따듯한 온도가 깃들기를 바란다.
                                    </LeadText>
                                    <a
                                    
                                    href="https://www.youtube.com/c/ONDOSTUDIO"
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
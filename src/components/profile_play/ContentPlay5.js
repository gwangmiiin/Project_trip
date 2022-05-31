import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/아크앤북.png';

export default function ContentPlay5() {
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
                            <H3 color="gray">아크앤북 이태원점</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                서울 용산구 장문로 23 (이태원동, 몬드리안 서울 이태원)  아크앤북 이태원점
                            </div>
                            <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                            <Icon name="keyboard_arrow_right" size="xl" />
                             6호선 이태원역 4번 출구에서 909m
                            </div>
                            
                            
                        </div>


                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                    아크앤북은 서점과 라이프스타일 숍이 공존하는 복합 문화 공간이다. 독서문화에 활기를 불어주며 4개의 테마로 구분된 큐레이션 서점이다. 방문객들은 매장 내에서 이용 가능한 다양한 책 장르를 통해 체험하고 탐구하면서 지식의 폭을 넓힐 수 있다. 방문객들이 책을 체험하고 공유할 수 있도록 하며 책을 사랑하는 마음을 통해 소통하고 함께 연결되는 공간을 만들어내고 있는 장소이다.
                                    </LeadText>
                                    <a
                                    
                                    href="https://www.instagram.com/arc.n.book_official/"
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
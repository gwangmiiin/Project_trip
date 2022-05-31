import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import Teamwork from 'assets/img/teamwork.jpeg';
import StatusCard1 from './StatusCard1';
import StatusCard2 from './StatusCard2';
import StatusCard3 from './StatusCard3';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard1
                        color="red" 
                        icon="brightness_1" 
                        title="볼거리"
                    >
                        볼거리 소개
                    </StatusCard1>
                    <StatusCard2
                        color="lightBlue"
                        icon="brightness_1"
                        title="먹거리"
                    >
                        먹거리 소개
                    </StatusCard2>
                    <StatusCard3
                        color="teal"
                        icon="brightness_1"
                        title="놀거리"
                    >
                        놀거리 소개
                    </StatusCard3>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">사이트 개발의 이유와 목표</H4>
                        <LeadText color="blueGray">
                            서울의 여러가지 볼것, 먹을것 들을 소개
                        </LeadText>
                        <LeadText color="blueGray">
                            서울에 처음 오는 사람 또는 외국인 이라도 위의 사이트를 보고 편하게 여행이 가능하게 
                        </LeadText>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={Teamwork} />
                            <CardBody>
                                <H6 color="gray">사이트 개발자</H6>
                                <Paragraph color="blueGray">
                                    신혜원, 김광민
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

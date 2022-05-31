import LeadText from '@material-tailwind/react/LeadText';
import StatusCard1 from 'components/landing/StatusCard1';
import StatusCard2 from 'components/landing/StatusCard2';
import StatusCard3 from 'components/landing/StatusCard3';

export default function ContentRecoCourse() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50"> 
                    <StatusCard1 title="기본 여행자 코스">
                        서울을 처음 방문하는 여행객들을 위한 안내.
                    </StatusCard1>
                    <StatusCard2 title="서울 정보습득 코스" >
                       서울의 역사와 문화를 느껴보기!
                    </StatusCard2>
                    <StatusCard3 title="서울 로컬라이프 코스 ">
                        서울 시민들이 즐겨찾는 여유공간 함께하기!
                    </StatusCard3>
                </div>
            </div>
            <div className="mb-10 py-2 border-t border-gray-200 text-center">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                        <LeadText color="blueGray">
                            
                        </LeadText>
                    </div>
                </div>
            </div>

        </section>
    );
}
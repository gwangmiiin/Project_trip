import H6 from '@material-tailwind/react/Heading6';
import StatusCard1 from 'components/landing/StatusCard1';
import StatusCard2 from 'components/landing/StatusCard2';
import StatusCard3 from 'components/landing/StatusCard3';

export default function ContentRecoCourse() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">  
                    <StatusCard1>
                        <H6>기본 여행자 코스</H6>
                       서울을 처음 방문하는 <br />
                       여행객들을 위한 안내
                    </StatusCard1>
                    <StatusCard2>
                        <H6>서울 로컬라이프 코스</H6>
                       서울 시민들이 즐겨찾는 <br />
                       여유공간 함께 즐기기!
                    </StatusCard2>
                    <StatusCard3>
                        <H6>서울 미식가 코스</H6>
                        서울에서 맛과 여유를 둘 다 잡으며 <br />
                        재휴식 하기!
                    </StatusCard3>
                </div>
            </div>
        </section>
    );
}
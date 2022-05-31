import H3 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import Button from '@material-tailwind/react/Button';

export default function Form() {
    return (
        <section className="pb-20 relative block bg-white">
        <div className="flex flex-wrap justify-center mt-24">
            <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="flex-auto p-5 lg:p-10">
                        <div className="w-full text-center">
                            <H3 color="gray">서울 여행지 추천 / 레코서울 건의</H3>
                            <Paragraph color="blueGray">
                                공유하고싶은 여행지 혹은 레코서울 사이트에 대한 건의를 남겨주세요.
                            </Paragraph>
                            <Paragraph color="blueGray">
                                월마다 추첨을 통해 소정의 상품을 드립니다.
                            </Paragraph>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="flex gap-8 mt-16 mb-12">
                                <Input
                                    type="text"
                                    placeholder="Full Name"
                                    color="lightBlue"
                                />
                                <Input
                                    type="email"
                                    placeholder="Email Address"
                                    color="lightBlue"
                                />
                            </div>

                            <Textarea color="lightBlue" placeholder="Message" />

                            <div className="flex justify-center mt-10">
                                <Button color="lightBlue" ripple="light">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
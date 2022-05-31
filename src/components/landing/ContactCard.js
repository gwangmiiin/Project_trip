import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';

export default function ContactCard({title, children }) {
    return (
        <div className="w-full lg:w-3/12 px-4 text-center">
            <H6 color="gray">{title}</H6>
            <Paragraph color="blueGray">{children}</Paragraph>
        </div>
    );
}
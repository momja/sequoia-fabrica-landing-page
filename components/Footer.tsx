import Icon from "@/components/Icon";

const copyright = "©2023 Sequoia Fabrica. All rights reserved."

export default function Footer() {

    const getContactItem = () => {
        return (
            <a className="text-md text-tea_green hover:text-tea_green-400" href="mailto:sequoiafabrica@gmail.org">
                <Icon iconName='at_symbol' />
                <span className="pl-1 align-middle">Contact</span>
            </a>
        );
    }

    const getInstagramItem = () => {
        return (
            <a className="text-md text-tea_green hover:text-tea_green-400" href="https://www.instagram.com/sequoia.fabrica/">
                <Icon iconName='instagram' />
                <span className="pl-1 align-middle">Instagram</span>
            </a>
        );
    }

    const getEventsItem = () => {
        return (
            <a className="text-md text-tea_green hover:text-tea_green-400" href="https://www.meetup.com/sequoia-fabrica-community-workshop-and-classes/">
                <Icon iconName='meetup' />
                <span className="pl-1 align-middle">Meetup</span>
            </a>
        );
};

    const getDonationItem = () => {
        return (
            <a className="text-md text-tea_green hover:text-tea_green-400" href="https://opencollective.com/sequoia-fabrica">
                <Icon iconName='present' />
                <span className="pl-1 align-middle">Donate</span>
            </a>
        );
    };
    
    const getCodeOfConduct = () => {
        return (
            <a className="text-md text-tea_green hover:text-tea_green-400" href="/docs/code_of_conduct">
                <Icon iconName='user_group' />
                <span className="pl-1 align-middle">Code Of Conduct</span>
            </a>
        );
    }

    const footerItems: JSX.Element[] = [
        getEventsItem(),
        getInstagramItem(),
        getDonationItem(),
        getContactItem(),
        getCodeOfConduct(),
    ];

    return (
        <footer className='footer bg-pigment_green-200  text-center lg:text-left'>
            <div className='p-10'>
                <div className='text-center flex flex-wrap'>
                    {footerItems.map((item, index) => (
                        <div className='flex-auto p-2' key={index}>{item}</div>
                    ))}
                </div>
            </div>
            <div>
                <p className="p-4 text-center text-tea_green">
                    {copyright}
                </p>
            </div>
        </footer>
    );
};

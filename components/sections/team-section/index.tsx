"use client";
import React, { useState, useEffect } from 'react';
import { useModal } from '@/contexts/ModalContext';

// --- MOCK DATA ---
const bgImg = "//im8health.com/cdn/shop/files/scientists-min.jpg?v=1727597898";
const bgImgSm = "//im8health.com/cdn/shop/files/science-min.jpg?v=1727597901";

interface MemberType {
    name: string;
    img: string;
    modalImg: string;
    role: string;
    description: string[];
    href: string;
}

const teamMembers: MemberType[] = [
    {
        name: "Prof. Suzanne Devkota",
        img: "//im8health.com/cdn/shop/files/Frame_1000004731.png?v=1727767462",
        modalImg: "//im8health.com/cdn/shop/files/Frame_1000004726.png?v=1727766672",
        role: "Director of Cedars-Sinai Human Microbiome Research Institute",
        description: [
            "Prof. Suzanne Devkota is a leading expert in microbiome research and its impact on human health, with over 15 years of experience in the field.",
            "She is an Associate Professor at Cedars-Sinai Medical Center and the Director of the Microbiome Research Institute.",
            "Prof. Devkota's groundbreaking work focuses on understanding the role of the gut microbiome in chronic diseases, including inflammatory bowel disease, obesity, and diabetes.",
            "She has published extensively in top scientific journals and is a sought-after speaker at international conferences.",
            "Prof. Devkota's research emphasizes the critical connection between the microbiome and overall health, highlighting the potential for microbiome-based therapies.",
            "Her insights into how diet and lifestyle influence the gut microbiome align closely with IM8's mission to advance health through innovative diagnostics and personalized medicine.",
            "Prof. Devkota's expertise in microbiome science will be invaluable in helping IM8 develop cutting-edge solutions to improve health outcomes and foster preventative care.",
        ],
        href: "",
    },
    {
        name: "Dr. James L. Green",
        img: "//im8health.com/cdn/shop/files/Frame_1000004729.png?v=1727767462",
        modalImg: "//im8health.com/cdn/shop/files/Frame_1000004724.png?v=1727766672",
        role: "Former Chief Scientist of NASA",
        description: [
            "Dr. James L. Green is the former Chief Scientist of NASA, where he dedicated an impressive 42 years to advancing space science and exploration.",
            "During his tenure, Dr. Green contributed to numerous groundbreaking missions, including the Mars Rover landings, the New Horizons mission to Pluto, and the Juno mission to Jupiter.",
            "He played a pivotal role in the development of planetary defense strategies and was instrumental in fostering international collaborations for space research.",
            "Dr. Green's extensive experience in managing large-scale scientific projects and his deep understanding of cutting-edge technologies bring a unique perspective to IM8.",
            "His work at NASA also included leveraging space research for health innovations, such as studying the effects of space travel on the human body and accelerated aging.",
            "His expertise in scientific innovation and strategic vision will be invaluable in advancing IM8's mission to revolutionize healthcare through precision diagnostics and personalized medicine.",
        ],
        href: "",
    },
    {
        name: "Dr. Dawn Mussallem",
        img: "//im8health.com/cdn/shop/files/sab_Dawn_grid.jpg?v=1747304298",
        modalImg: "//im8health.com/cdn/shop/files/sab_Dawn_bio.jpg?v=1747304312",
        role: "CMO of Fountain Life & Integrative Oncologist at Mayo Clinic",
        description: [
            "Dr. Dawn Mussallem, DO, DipABLM, is a globally recognized physician-leader in lifestyle, integrative, and longevity medicine. She serves as Chief Medical Officer of Fountain Life—named Longevity Clinic of the Year 2025—and as a Founding Scientific Advisor to IM8 Health, shaping evidence-based protocols and product strategy at the intersection of prevention and performance.",
            "Over 20 years as a Mayo Clinic physician, she founded the Mayo Clinic Integrative Breast Oncology Program, integrating lifestyle medicine, integrative symptom management, mind–body therapies, precision nutrition and exercise prescriptions, and survivorship support alongside conventional oncology.",
            "Trained in exercise physiology, she is a clinician-investigator who has led research and translated evidence into scalable, measurable protocols—informing IM8's scientific standards and formulation philosophy.",
            "A stage IV cancer survivor and heart transplant recipient, she became the first person to complete a marathon after heart transplantation, embodying the resilience science she teaches.",
            "She is a global keynote speaker who energizes audiences with evidence-based optimism and contagious enthusiasm—advancing a mission to democratize wellness and elevate human flourishing.",
        ],
        href: "",
    },
    {
        name: "Dr. James DiNicolantonio",
        img: "https://im8health.com/cdn/shop/files/Dr._James_D.png?v=1730708665&width=900",
        modalImg: "//im8health.com/cdn/shop/files/sab_DiNicolantonio_bio.png?v=1730865500",
        role: "Cardiovascular Research Scientist and Doctor of Pharmacy",
        description: [
            "Dr. James DiNicolantonio is a cardiovascular research scientist and Doctor of Pharmacy, known for his influential work in the field of heart health and evidence-based nutrition. Author of several bestselling books, including The Obesity Fix and Superfuel, he has published over 300 scientific papers, focusing on the impact of nutrition on long-term health and chronic disease prevention. His work provides valuable insights into optimizing well-being through natural and scientifically supported methods.",
            "A respected authority in the health and wellness community, Dr. DiNicolantonio's approach centers on simplifying complex scientific concepts, making health strategies accessible to a broad audience. He advocates for a proactive approach to wellness, combining cutting-edge research with practical applications to help individuals achieve peak physical and mental performance. His focus on heart health and longevity has made him a key figure for those looking to improve their overall well-being through informed lifestyle choices.",
        ],
        href: "",
    },
    {
        name: "Dr. Jeremy London",
        img: "//im8health.com/cdn/shop/files/sab_London_headshot.jpg?v=1741755281",
        modalImg: "//im8health.com/cdn/shop/files/sab_London_bio.jpg?v=1741755302",
        role: "Board Certified Cardiovascular Surgeon",
        description: [
            "Dr. Jeremy London is a distinguished cardiothoracic surgeon renowned for his expertise in cardiac surgery and minimally invasive procedures. With 26 years of experience treating complex heart conditions, Dr. London emphasizes personalized patient care and integrates advanced surgical techniques to optimize cardiovascular health and recovery.",
            "Recognized for his compassionate and patient-centered approach, Dr. London excels at translating complex cardiac procedures into clear, understandable guidance, empowering patients to actively participate in their care. Dr. London's commitment to excellence and his dedication to patient education have established him as a trusted figure in the health and wellness community, helping individuals achieve healthier, happier lives.",
        ],
        href: "",
    },
    {
        name: "Dr. Amy Shah",
        img: "//im8health.com/cdn/shop/files/sab_Shah_headshot.jpg?v=1741754337",
        modalImg: "//im8health.com/cdn/shop/files/sab_Shah_bio.jpg?v=1741754349",
        role: 'Double-Board Certified Physician & Host of Podcast "Save Yourself"',
        description: [
            "Dr. Amy Shah is a double board-certified MD specializing in integrative medicine and a nutrition specialist. She works in clinical medicine, allergy/immunology, and over the last 10 years has developed a world-renowned wellness education platform, successfully launched a growing collection of health and wellness products, written bestselling books, including I'm So Effing Hungry and I'm So Effing Tired, and has made numerous national network appearances. She works to discover less invasive interventions, promote wellness, and teach others how to impact their health via nutrition and exercise -- using medication as a last resort. Her goal is to empower people to \"save themselves\" through nutrition and lifestyle changes.",
            "Passionate about helping people take control of their health, Dr. Shah offers a wealth of knowledge on how to optimize vitality through nutrition, fasting, and lifestyle adjustments. Her expertise in gut health and hormone balance has made her a sought-after figure for individuals seeking to enhance their health naturally. Dr. Shah's balanced, mindful approach resonates with a growing community of wellness enthusiasts who prioritize longevity and sustainable, science-based health practices.",
        ],
        href: "",
    },
    {
        name: "Dr. Ara Suppiah",
        img: "//im8health.com/cdn/shop/files/sab_Suppiah_headshot.jpg?v=1750043459",
        modalImg: "//im8health.com/cdn/shop/files/sab_Suppiah_bio.jpg?v=1750043459",
        role: "Performance Strategist, Sports Physician, Creator of Functional Sports Medicine",
        description: [
            "Dr. Ara Suppiah is a globally respected sports physician and performance strategist known for helping elite athletes perform at their highest level—consistently, intelligently, and without burning out.",
            "Born in Malaysia, trained in the UK, and now based in the U.S., Ara blends deep medical expertise with cutting-edge tools from neuroscience, functional medicine, genetics, biomechanics, and AI. He's worked with 7 World No.1s, 35 major golf wins, Olympic medalists, and multiple Ryder Cup teams. As Head of Medical Services for LIV Golf, he's building world-class systems to keep the game's best at the top of theirs.",
            "He created the Functional Sports Medicine Matrix, a systems-based framework to optimize recovery, energy, resilience, and performance. Through his Masterclass and consulting, he teaches other professionals how to think in systems—not symptoms.",
            "Despite his global reputation, Dr. Ara still works as an ER physician in Orlando and mentors the next generation of clinicians as an assistant professor at the University of Central Florida.",
            "His mission is big: to empower one million athletes using the best of authentic intelligence + artificial intelligence.",
        ],
        href: "",
    },
    {
        name: "Dr. Darshan Shah",
        img: "//im8health.com/cdn/shop/files/sab_DarshanShah_headshot.jpg?v=1750043459",
        modalImg: "//im8health.com/cdn/shop/files/sab_DarshanShah_bio.jpg?v=1750043459",
        role: "Board Certified Surgeon & Physician, CEO and Founder of Next Health",
        description: [
            "Darshan Shah, MD, is a health and wellness specialist, board-certified surgeon, published author, and founder of Next Health, the world's first and largest Health Optimization and Longevity clinic. Dr. Shah is a board certified surgeon who has performed over 20,000 surgical procedures, including trauma and complex reconstructive procedures. As a Longevity Medicine specialist, he has advised thousands of patients on how to optimize their well-being and extend their healthspan and lifespan.",
            "Dr. Shah began his career at an accelerated MD program and earned his medical degree at the age of 21, becoming one of the youngest doctors in the United States. He continued his training at the Mayo Clinic, one of the most prestigious medical institutes in the country.",
            "After earning his board certification, he opened medical/surgical centers throughout California, started four other companies in the Health and Wellness space, and has published a book, authored numerous papers and patented medical devices.",
            "Dr. Shah's belief in continual education and self-improvement has earned him alumni status at Harvard Business School, Singularity University, and other prestigious institutions. His passion is educating people on the topics of adding healthspan to your lifespan, having done over 100+ speaking engagements and hosting the critically acclaimed podcast Extend.",
        ],
        href: "",
    },
    {
        name: "Simon Hill",
        img: "//im8health.com/cdn/shop/files/sab_Hill_headshot.jpg?v=1750043459",
        modalImg: "//im8health.com/cdn/shop/files/sab_Hill_bio_1.jpg?v=1750043459",
        role: "MSc, BSc, Nutritionist, Physiologist, Author and Podcast Host",
        description: [
            "Simon Hill, a physiotherapist and nutrition scientist, is dedicated to simplifying health and nutrition information. He began his career interested in the physiology and anatomy related to optimal athletic performance. Then, encouraged by his Dad's heart attack, he turned his attention to nutrition's role in preventing disease and optimising health. Concerned about misleading wellness industry trends, he completed a Master of Science in Human Nutrition at Deakin University.",
            'Today, Simon hosts a podcast featuring experts translating research into practical advice. He authored "The Proof is in the Plants," advocating for a plant-rich diet based on current nutrition research.',
            "On it's debut week The Proof is in the Plants was the #1 non-fiction book in Australia. He continues to deepen his understanding of human health by being actively involved in research investigating the links between nutrition and mental health.",
            "His podcast, The Proof, a space where he sits down with domain-specific experts, has surpassed 40 million listens, exploring various lifestyle factors impacting well-being. Simon now conducts immersive longevity experiences, aiming to empower people to live better for longer.",
        ],
        href: "",
    },
];

// --- ICONS ---
const AddButtonIcon = ({ className }: { className?: string }) => (
    <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g clipPath="url(#clip0_142_1201)">
            <g filter="url(#filter0_b_142_1201)">
                <path
                    d="M24 0L40.973 7.02703L48 24L40.973 40.973L24 48L7.02703 40.973L0 24L7.02703 7.02703L24 0Z"
                    fill="white"
                    fillOpacity="0.8"
                ></path>
                <path
                    d="M7.40974 7.40974L24 0.541158L40.5903 7.40974L47.4588 24L40.5903 40.5903L24 47.4588L7.40974 40.5903L0.541158 24L7.40974 7.40974Z"
                    stroke="#50000B"
                ></path>
            </g>
            <path
                d="M33 24H15"
                stroke="#50000B"
                strokeWidth="2"
                strokeLinecap="square"
            ></path>
            <path
                d="M24 15V33"
                stroke="#50000B"
                strokeWidth="2"
                strokeLinecap="square"
            ></path>
        </g>
        <defs>
            <filter
                id="filter0_b_142_1201"
                x="-12"
                y="-12"
                width="72"
                height="72"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="6"
                ></feGaussianBlur>
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_142_1201"
                ></feComposite>
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_142_1201"
                    result="shape"
                ></feBlend>
            </filter>
            <clipPath id="clip0_142_1201">
                <rect width="48" height="48" fill="white"></rect>
            </clipPath>
        </defs>
    </svg>
);

const RedX = ({ className }: { className?: string }) => (
    <svg
        className={className}
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g
            clipPath="url(#a)"
            stroke="#50000b"
            strokeWidth={2}
            strokeLinecap="square"
            strokeLinejoin="round"
        >
            <path d="M25.428 6.572 6.572 25.428m18.856 0L6.572 6.572" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h32v32H0z" />
            </clipPath>
        </defs>
    </svg>
);

// --- SUB COMPONENTS ---

const InfoModal = ({
    member,
    isModalOpen,
    setIsModalOpen
}: {
    member: MemberType;
    isModalOpen: boolean;
    setIsModalOpen: (open: boolean) => void;
}) => {
    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-[#f2e0dd]/50 backdrop-blur-sm"
                onClick={() => setIsModalOpen(false)}
            ></div>

            {/* Content */}
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col">
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-6 right-6 cursor-pointer z-10 hover:opacity-70 transition-opacity"
                >
                    <RedX className="w-8 h-8" />
                </button>

                {/* Fixed Image */}
                <div className="pt-16 px-8 shrink-0">
                    <div className="h-45">
                        <img
                            src={member.modalImg}
                            alt={member.name}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar px-8 pt-6">
                    <div className="flex flex-col gap-5 text-[#50000b]">
                        <div className="space-y-1">
                            <h2 className="text-[32px] leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                {member.name}
                            </h2>
                            <p className="text-base font-bold">{member.role}</p>
                        </div>

                        <div className="space-y-3">
                            {member.description.map((paragraph, index) => (
                                <p key={index} className="text-base leading-relaxed opacity-90">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fixed Button */}
                <div className="px-8 pb-10 pt-6 shrink-0">
                    <button className="rounded-full uppercase bg-[#a40011] transition duration-300 hover:bg-[#50000b] text-white font-bold text-base h-fit py-3.5 px-6 w-full">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

const Card = ({ member }: { member: MemberType }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { setIsModalOpen: setGlobalModalOpen } = useModal();
    const { role, img, name } = member;

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
            setGlobalModalOpen(true);
        } else {
            document.body.style.overflow = 'unset';
            setGlobalModalOpen(false);
        }
        return () => {
            document.body.style.overflow = 'unset';
            setGlobalModalOpen(false);
        };
    }, [isModalOpen, setGlobalModalOpen]);

    return (
        <>
            <div
                className="rounded-xl flex max-md:flex-col md:bg-[#f5eaea] bg-white cursor-pointer relative h-full max-md:h-fit group transition-shadow hover:shadow-md"
                onClick={() => setIsModalOpen(true)}
            >
                <div className="h-full md:w-[46%] w-full relative">
                    <img
                        src={img}
                        alt={name}
                        className="w-full h-full rounded-l-xl max-md:rounded-r-xl object-cover aspect-[3/4] md:aspect-auto"
                        loading="lazy"
                    />
                    <div className="absolute bottom-4 right-4 md:hidden">
                        <AddButtonIcon className="w-12 h-12" />
                    </div>
                </div>
                <div className="2xl:py-6 2xl:pr-4 2xl:pl-8 p-4 flex flex-col gap-1 text-base md:w-[54%]">
                    <h3 className="font-bold text-[#50000b] text-[16px]" style={{ fontFamily: 'var(--font-body)' }}>{name}</h3>
                    <p className="text-base md:text-xs 2xl:text-base text-[#50000b] opacity-80 leading-snug">{role}</p>
                </div>
                <div className="absolute bottom-4 right-4 max-xl:bottom-3 max-xl:right-3 max-md:hidden">
                    <AddButtonIcon className="w-12 h-12 max-xl:w-8 max-xl:h-8" />
                </div>
            </div>
            <InfoModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                member={member}
            />
        </>
    );
};

export const TeamSection = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <img
                src={bgImg}
                alt="background image"
                className="w-full h-full absolute inset-0 object-cover object-center -z-10 max-md:hidden"
            />
            <img
                src={bgImgSm}
                alt="background image"
                className="w-full h-full absolute inset-0 object-cover object-center -z-10 md:hidden"
            />
            <div className="im8-container md:py-26 py-14 relative z-10">
                <div className="flex flex-col md:gap-14 gap-8 text-[#50000b]">
                    <div className="flex items-center justify-center w-full flex-col gap-1 text-center max-md:max-w-xs mx-auto text-white">
                        <p className="uppercase text-sm mb-4 font-bold tracking-widest text-[#50000b]" style={{ fontFamily: 'var(--font-nb-architekt)' }}>
                            Driven by Science
                        </p>
                        <h2 className="md:text-[52px] text-[40px] font-light leading-tight text-[#50000b]" style={{ fontFamily: 'var(--font-heading)' }}>
                            Meet The Brilliant Minds Behind IM8
                        </h2>
                        <p className="mt-4 text-base opacity-90 max-w-2xl text-[#50000b]">
                            An unparalled collaboration between academia, medicine, and space science.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
                        {teamMembers.map((member) => (
                            <div key={member.name}>
                                <Card member={member} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

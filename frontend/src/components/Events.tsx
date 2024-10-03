import React, { useEffect, useState } from 'react';
import chip from "../assets/chip.png";
import virtual from "../assets/virtual.png";
import ar from "../assets/ar.png";
import time from "../assets/time.png";
import location from "../assets/location.png";
import cal from "../assets/cal.png";
import cost from "../assets/cost.png";
import grid from "../assets/Grid.png";

interface EventInfo {
    title: string;
    description: string;
    price: number;
    venue: string;
    image: string;
    startDateAndTime: string;
    endDateAndTime: string;
    onclick: string;
}

interface DateTime {
    date: string;
    time: string;
}

const Events: React.FC = () => {
    const [eventInfo, setEventInfo] = useState<EventInfo[]>([]);
    const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('past');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchEvents();
    }, [activeTab]);

    const fetchEvents = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("https://nacoss-csc.onrender.com/api/events?session=2022-2023");
            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }
            const data = await response.json();
            setEventInfo(data);
        } catch (error) {
            console.error('Error fetching events:', error);
            setError('Failed to load events. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const getImageSource = (imageUrl: string): string => {
        switch (imageUrl) {
            case 'chip.png':
                return chip;
            case 'virtual.png':
                return virtual;
            case 'ar.png':
                return ar;
            default:
                return imageUrl;
        }
    };

    const splitDateTime = (dateTimeStr: string): DateTime => {
        const [date, time] = dateTimeStr.replace('-', ' ').split(' ');

        const timeParts = time.split(':');
        let hours = parseInt(timeParts[0]);
        const minutes = timeParts[1].slice(0, 2);
        const ampm = time.slice(-2).toLowerCase();

        if (ampm === 'pm' && hours !== 12) {
            hours += 12;
        } else if (ampm === 'am' && hours === 12) {
            hours = 0;
        }

        return {
            date,
            time: `${hours}:${minutes}`,
        };
    };

    if (loading) {
        return <div>Loading events...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section
            id="hero"
            className="relative container mx-auto flex flex-col justify-center items-center pt-4 px-4 sm:px-8 md:px-16"
            style={{ backgroundImage: `url(${grid})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
        >
            <div className="my-12 container mx-auto" id="events">
                <p className="text-center leading-[48px] font-bold text-[3rem] mb-8 hero-text">
                    Events and Bootcamps
                </p>
                <div className="flex flex-col flex-wrap justify-center items-center">
                    <div className="flex w-[22rem] bg-[#E1E1E1] rounded-[10px] event-btn">
                        <button
                            className={`w-full py-2 px-4 rounded-l-lg focus:outline-none bg-gray-300 cursor-not-allowed`}
                        >
                            Upcoming events
                        </button>
                        <button
                            className={`p-4 w-full rounded-[10px] bg-[#1D4E8D] shadow-md text-white`}
                            onClick={() => setActiveTab('past')}
                        >
                            Past events
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
                        {eventInfo.map((info) => {
                            const startDateTime = splitDateTime(info.startDateAndTime);
                            const endDateTime = splitDateTime(info.endDateAndTime);

                            const handleCatchUpClick = () => {
                                window.open(info.onclick, '_blank');
                            };

                            return (
                                <div key={info.title}
                                     className="flex flex-col w-full sm:w-[300px] mx-6 shadow-lg bg-white rounded-md hover:shadow-xl transition-shadow">
                                    <img src={getImageSource(info.image)} alt={info.title}
                                         className="w-full h-[250px] object-cover rounded-t-md"
                                         style={{ objectFit: 'cover' }} />
                                    <div className="px-6 py-6 flex-grow">
                                        <p className="font-semibold my-2 event-txt">{info.title}</p>
                                        <p className="text-[14px] sub-text">{info.description}</p>
                                    </div>
                                    <div className="flex flex-col justify-between px-6 py-4">
                                        <div className="mb-4">
                                            <span className="flex items-center mb-2">
                                                <img src={cal} className="w-[14px] h-[14px]" alt="Calendar" />
                                                <p className="text-[12px] sub-text ml-2">
                                                    {startDateTime.date} - {endDateTime.date}
                                                </p>
                                            </span>
                                            <span className="flex items-center mb-2">
                                                <img src={time} className="w-[14px] h-[14px]" alt="Time" />
                                                <p className="text-[12px] sub-text ml-2">
                                                    {startDateTime.time} - {endDateTime.time}
                                                </p>
                                            </span>
                                            <span className="flex items-center mb-2">
                                                <img src={location} className="w-[14px] h-[14px]" alt="Location" />
                                                <p className="text-[12px] sub-text ml-2">{info.venue}</p>
                                            </span>
                                            <span className="flex items-center">
                                                <img src={cost} className="w-[14px] h-[14px]" alt="Cost" />
                                                <p className="text-[12px] sub-text ml-2">{"Free. "}</p>
                                            </span>
                                        </div>
                                        <div className="flex justify-end">
                                            <button
                                                className="bg-[#032B44] hover:bg-[#29176B] text-[#fff] text-[12px] py-2 px-4 rounded-[30px]"
                                                onClick={handleCatchUpClick}
                                            >
                                                Catch Up!
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import elinked from "../assets/elinkedin.png";
import etwitter from "../assets/etwitter.png";
import egmail from "../assets/egmail.png";
import grid from "../assets/Grid.png";

// Types
interface Executive {
    email: string;
    name: string;
    studentId: string;
    position: string;
    session: string;
    imageUrl: string;
    twitterUrl?: string;
    linkedinUrl?: string;
}

interface ApiResponse {
    execs: Executive[];
}

// Base URL
const BASE_API_URL = "https://nacoss-csc.onrender.com/api/execs";

// ExecutiveCard Component
const ExecutiveCard: React.FC<{ executive: Executive }> = ({executive}) => {
    return (
        <div
            className="w-full sm:w-[270px] flex flex-col justify-center items-center my-8 bg-white m-2.5 p-4 shadow-md rounded-md hover:shadow-xl transition-shadow duration-300"
        >
            <img
                src={executive.imageUrl}
                alt={`${executive.name} - ${executive.position}`}
                className="rounded-full h-32 w-32 object-cover"
                onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/200x200?text=No+Image';
                }}
                loading="lazy"
            />
            <p className="mt-4 text-xl font-bold text-black text-center">{executive.name}</p>
            <p className="text-lg text-black text-center">{executive.position}</p>
            <p className="text-sm text-gray-600 mb-4 text-center">{executive.studentId}</p>
            <div className="flex justify-center space-x-4 my-2">
                <a href={`mailto:${executive.email}`} aria-label={`Email ${executive.name}`}>
                    <img src={egmail} className="h-5 w-5" alt="Email Icon"/>
                </a>
                {executive.twitterUrl && (
                    <a href={executive.twitterUrl} target="_blank" rel="noopener noreferrer"
                       aria-label={`Twitter Profile of ${executive.name}`}>
                        <img src={etwitter} className="h-5 w-5" alt="Twitter Icon"/>
                    </a>
                )}
                {executive.linkedinUrl && (
                    <a href={executive.linkedinUrl} target="_blank" rel="noopener noreferrer"
                       aria-label={`LinkedIn Profile of ${executive.name}`}>
                        <img src={elinked} className="h-5 w-5" alt="LinkedIn Icon"/>
                    </a>
                )}
            </div>
        </div>
    );
};

// LoadingSpinner Component
const LoadingSpinner: React.FC = () => (
    <div className="text-black p-5 text-center">Loading executives data...</div>
);

// ErrorMessage Component
const ErrorMessage: React.FC<{ message: string; retry: () => void }> = ({message, retry}) => (
    <div className="text-red-500 p-5 text-center">
        <p>Error: {message}</p>
        <button
            onClick={retry}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            aria-label="Retry Fetching Executives"
        >
            Retry
        </button>
    </div>
);

// Main Executives Component
const Executives: React.FC = () => {
    const [executives, setExecutives] = useState<Executive[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'current' | 'past'>('past');
    const [yearRange, setYearRange] = useState<string>('2022/2023');

    const fetchExecutives = async (retryCount = 0) => {
        setLoading(true);
        setError(null);
        const session = activeTab === 'current' ? '2023-2024' : '2022-2023';
        const API_URL = `${BASE_API_URL}?session=${session}`;

        try {
            const response = await axios.get<ApiResponse>(API_URL, {
                timeout: 10000,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (response.data && Array.isArray(response.data.execs)) {
                setExecutives(response.data.execs);
            } else {
                throw new Error('Unexpected API response structure');
            }
        } catch (err) {
            console.error('API Error:', err);
            if (axios.isAxiosError(err)) {
                if (err.code === 'ECONNABORTED') {
                    setError('Request timed out. The server might be slow to respond.');
                } else if (err.response) {
                    setError(`Server responded with error: ${err.response.status} ${err.response.statusText}`);
                } else if (err.request) {
                    setError('No response received from the server. Please check your internet connection.');
                } else {
                    setError(`Error setting up the request: ${err.message}`);
                }
            } else {
                setError('An unexpected error occurred. Please try again later.');
            }

            if (retryCount < 2) {
                console.log(`Retrying... Attempt ${retryCount + 1}`);
                setTimeout(() => fetchExecutives(retryCount + 1), 2000);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExecutives();
    }, [activeTab]);

    const handleTabClick = (tab: 'current' | 'past') => {
        if (tab !== activeTab) {
            setActiveTab(tab);
            setYearRange(tab === 'current' ? '2023/2024' : '2022/2023');
        }
    };

    if (loading) return <LoadingSpinner/>;
    if (error) return <ErrorMessage message={error} retry={() => fetchExecutives()}/>;
    if (executives.length === 0) return <div className="text-black p-5 text-center">No executives data available for the
        selected session.</div>;

    return (
        <section
            id="executives"
            className="relative container mx-auto flex flex-col justify-center items-center py-10 px-4 sm:px-8 md:px-16"
            style={{backgroundImage: `url(${grid})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
        >
            <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4 my-12">
                <h1 className="text-4xl font-bold mb-4 mt-8 text-center">Meet Your Executives</h1>
                <h4 className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
                    Meet the passionate students driving the success of the community 🚀
                </h4>

                {/* Tabs */}
                <div className="flex w-full max-w-[22rem] bg-gray-200 rounded-lg mb-8">
                    <button
                        className={`w-full py-2 px-4 rounded-l-lg focus:outline-none bg-gray-300 cursor-not-allowed`}

                        onClick={() => {
                        }}
                        disabled={activeTab === 'current'}
                        aria-label="View Current Executives"
                    >
                        Current Executives
                    </button>
                    <button
                        // className={`w-full py-2 px-4 rounded-r-lg focus:outline-none ${
                        //     activeTab === 'past'
                        //         ? 'bg-gray-300 cursor-not-allowed'
                        //         : 'hover:bg-blue-700 hover:text-white'
                        // }`}
                        className={`p-4 w-full rounded-[10px] bg-[#1D4E8D] shadow-md text-white`}
                        onClick={() => handleTabClick('past')}
                        disabled={activeTab === 'past'}
                        aria-label="View Past Executives"
                    >
                        Past Executives
                    </button>
                </div>

                {/* Year Range Display */}
                <div className="mb-6 text-lg font-medium text-gray-700">
                    Showing Executives for <span className="text-blue-700">{yearRange}</span> Session
                </div>

                {/* Executives Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {executives.map((executive) => (
                        <ExecutiveCard key={executive.email} executive={executive}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Executives;

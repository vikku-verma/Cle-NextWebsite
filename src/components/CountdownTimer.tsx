'use client';

import { useEffect, useState } from 'react';

interface CountdownTimerProps {
    endDate: string;
}

interface TimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    expired: boolean;
}

export default function CountdownTimer({ endDate }: CountdownTimerProps) {
    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: false,
    });

    useEffect(() => {
        const convertOrdinalDate = (dateStr: string): string => {
            // Convert "28th February 2026" to "February 28, 2026"
            const ordinalPattern = /(\d+)(st|nd|rd|th)\s+(\w+)\s+(\d{4})/;
            const match = dateStr.match(ordinalPattern);
            if (match) {
                const [, day, , month, year] = match;
                return `${month} ${day}, ${year}`;
            }
            return dateStr;
        };

        const calculateTimeRemaining = () => {
            if (!endDate) {
                setTimeRemaining({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    expired: true,
                });
                return;
            }

            // Try to parse the date - handle various formats
            let end: number;
            try {
                // Convert ordinal dates if needed
                const convertedDate = convertOrdinalDate(endDate);

                // If it's already a timestamp
                if (!isNaN(Number(convertedDate))) {
                    end = Number(convertedDate);
                } else {
                    // Try parsing as date string
                    end = new Date(convertedDate).getTime();
                }

                // Check if parsing was successful
                if (isNaN(end)) {
                    console.error('Invalid date format:', endDate, 'Converted to:', convertedDate);
                    setTimeRemaining({
                        days: 0,
                        hours: 0,
                        minutes: 0,
                        seconds: 0,
                        expired: true,
                    });
                    return;
                }
            } catch (error) {
                console.error('Error parsing date:', error);
                setTimeRemaining({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    expired: true,
                });
                return;
            }

            const now = new Date().getTime();
            const difference = end - now;

            if (difference <= 0) {
                setTimeRemaining({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    expired: true,
                });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeRemaining({
                days,
                hours,
                minutes,
                seconds,
                expired: false,
            });
        };

        // Calculate immediately
        calculateTimeRemaining();

        // Update every second
        const interval = setInterval(calculateTimeRemaining, 1000);

        return () => clearInterval(interval);
    }, [endDate]);

    if (timeRemaining.expired) {
        return (
            <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-2 max-w-2xl">
                <p className="text-left text-slate-400 text-sm uppercase tracking-widest font-bold">
                    Registration Closed
                </p>
            </div>
        );
    }

    return (
        <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-4 max-w-2xl">
            <p className="text-left text-[#f59e0b] text-[11px] uppercase tracking-[0.2em] font-black mb-6">
                Registration Closes In
            </p>
            <div className="grid grid-cols-4 gap-4">
                {/* Days */}
                <div className="flex flex-col items-center">
                    <div className="bg-[#1e293b] rounded-xl p-6 w-full flex items-center justify-center border border-white/5 shadow-xl">
                        <span className="text-4xl md:text-5xl font-bold text-white tabular-nums">
                            {String(timeRemaining.days).padStart(2, '0')}
                        </span>
                    </div>
                    <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mt-3">
                        Days
                    </span>
                </div>

                {/* Hours */}
                <div className="flex flex-col items-center">
                    <div className="bg-[#1e293b] rounded-xl p-6 w-full flex items-center justify-center border border-white/5 shadow-xl">
                        <span className="text-4xl md:text-5xl font-bold text-white tabular-nums">
                            {String(timeRemaining.hours).padStart(2, '0')}
                        </span>
                    </div>
                    <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mt-3">
                        Hours
                    </span>
                </div>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                    <div className="bg-[#1e293b] rounded-xl p-6 w-full flex items-center justify-center border border-white/5 shadow-xl">
                        <span className="text-4xl md:text-5xl font-bold text-white tabular-nums">
                            {String(timeRemaining.minutes).padStart(2, '0')}
                        </span>
                    </div>
                    <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mt-3">
                        Mins
                    </span>
                </div>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                    <div className="bg-[#1e293b] rounded-xl p-6 w-full flex items-center justify-center border border-white/5 shadow-xl">
                        <span className="text-4xl md:text-5xl font-bold text-white tabular-nums">
                            {String(timeRemaining.seconds).padStart(2, '0')}
                        </span>
                    </div>
                    <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mt-3">
                        Secs
                    </span>
                </div>
            </div>
        </div>
    );
}

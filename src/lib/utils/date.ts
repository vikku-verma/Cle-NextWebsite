/**
 * Utility functions for date parsing and formatting
 */

/**
 * Converts ordinal date format to standard format
 * Example: "28th February 2026" -> "February 28, 2026"
 */
export function convertOrdinalDate(dateStr: string): string {
    const ordinalPattern = /(\d+)(st|nd|rd|th)\s+(\w+)\s+(\d{4})/;
    const match = dateStr.match(ordinalPattern);
    if (match) {
        const [, day, , month, year] = match;
        return `${month} ${day}, ${year}`;
    }
    return dateStr;
}

/**
 * Safely parses a date string and returns timestamp
 * Returns null if parsing fails
 */
export function parseDateSafely(dateStr: string | undefined | null): number | null {
    if (!dateStr) return null;

    try {
        // Convert ordinal dates if needed
        const convertedDate = convertOrdinalDate(dateStr);

        // If it's already a timestamp
        if (!isNaN(Number(convertedDate))) {
            return Number(convertedDate);
        }

        // Try parsing as date string
        const timestamp = new Date(convertedDate).getTime();

        // Check if parsing was successful
        if (isNaN(timestamp)) {
            return null;
        }

        return timestamp;
    } catch (error) {
        console.error('Error parsing date:', dateStr, error);
        return null;
    }
}

/**
 * Determines workshop/program status based on start and end dates
 */
export function getWorkshopStatus(
    startDate: string | undefined,
    endDate: string | undefined
): {
    text: string;
    className: string;
} {
    const now = new Date().getTime();
    const start = parseDateSafely(startDate);
    const end = parseDateSafely(endDate);

    if (start && end && !isNaN(start) && !isNaN(end)) {
        if (now < start) {
            return {
                text: "● Program Not Started",
                className: "bg-gradient-to-r from-[#64748b] to-[#94a3b8] shadow-slate-500/20"
            };
        } else if (now >= start && now <= end) {
            return {
                text: "● Program Live",
                className: "bg-gradient-to-r from-[#ef4444] to-[#f87171] animate-pulse shadow-red-500/20"
            };
        } else {
            return {
                text: "● Program Ended",
                className: "bg-gradient-to-r from-[#475569] to-[#64748b] shadow-slate-600/20"
            };
        }
    }

    // Default fallback
    return {
        text: "● Live Workshop",
        className: "bg-gradient-to-r from-[#ef4444] to-[#f87171] animate-pulse shadow-red-500/20"
    };
}

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

/**
 * Formats a date range string
 * Example: "26 - 28 February 2026" or "28 Feb - 02 Mar 2026"
 */
export function formatDateRange(
    startDateStr: string | undefined,
    endDateStr: string | undefined
): string {
    if (!startDateStr) return "TBA";

    const startTimestamp = parseDateSafely(startDateStr);
    if (!startTimestamp) return startDateStr; // Return original if parsing fails

    const startDate = new Date(startTimestamp);
    const startDay = startDate.getDate();
    const startMonth = startDate.toLocaleString('default', { month: 'long' });
    const startYear = startDate.getFullYear();

    if (!endDateStr) {
        return `${startDay} ${startMonth} ${startYear}`;
    }

    const endTimestamp = parseDateSafely(endDateStr);
    if (!endTimestamp) {
        return `${startDay} ${startMonth} ${startYear}`; // Fallback if end date invalid
    }

    const endDate = new Date(endTimestamp);
    const endDay = endDate.getDate();
    const endMonth = endDate.toLocaleString('default', { month: 'long' });
    const endYear = endDate.getFullYear();

    // Same Year
    if (startYear === endYear) {
        // Same Month
        if (startMonth === endMonth) {
            return `${startDay} - ${endDay} ${startMonth} ${startYear}`;
        }
        // Different Month
        return `${startDay} ${startDate.toLocaleString('default', { month: 'short' })} - ${endDay} ${endDate.toLocaleString('default', { month: 'short' })} ${startYear}`;
    }

    // Different Year
    return `${startDay} ${startDate.toLocaleString('default', { month: 'short' })} ${startYear} - ${endDay} ${endDate.toLocaleString('default', { month: 'short' })} ${endYear}`;
}

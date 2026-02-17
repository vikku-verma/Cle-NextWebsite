import { Mentor, WordPressFormEntry } from "@/lib/types";

export async function fetchMentors(): Promise<Mentor[]> {
    const API_URL = process.env.MENTOR_API_URL;
    const username = process.env.WP_USER!;
    const appPassword = process.env.WP_APP_PASSWORD!;

    if (!API_URL) {
        console.error("fetchMentors: MENTOR_API_URL is not defined");
        return [];
    }

    // Since this is server-side code in Next.js (if used in Server Component), 
    // we use Buffer for base64. If client-side, we'd use btoa.
    const auth = Buffer.from(`${username}:${appPassword}`).toString('base64');

    try {
        const res = await fetch(API_URL, {
            headers: {
                'Authorization': `Basic ${auth}`,
            },
        });

        if (!res.ok) {
            console.error(`fetchMentors: Failed to fetch mentors: ${res.status} ${res.statusText}`);
            return [];
        }

        const data = await res.json();
        const rawEntries = Array.isArray(data) ? data : Object.values(data);

        return rawEntries
            .filter((entry: any) => {
                const meta = entry.meta || {};
                const visibility = (Array.isArray(meta.ntxba) ? meta.ntxba[0] : meta.ntxba);
                return visibility && visibility.toString().trim() !== "";
            })
            .map((entry: any) => {
                const meta = entry.meta || {};

                // Map the specific keys provided by the user
                const getValue = (val: any) => (Array.isArray(val) ? val[0] : val) || "";

                const name = getValue(meta.wl7sz) || "Unknown Mentor";
                const profilePic = getValue(meta['97ofh']) || "";
                const slug = getValue(meta.ab0kv) || entry.id.toString();

                // Detailed Profile Keys
                const email = getValue(meta['510p4']);
                const phone = getValue(meta.azb8q);
                const signature = getValue(meta['2il4m']);
                const bio = getValue(meta['848yh']);
                const qualification = getValue(meta.mfvu4);
                const passingYear = getValue(meta.kis3m);
                const affiliation = getValue(meta.yyc0o);
                const department = getValue(meta.j41ka);
                const gstNo = getValue(meta.rl52t);
                const cinNo = getValue(meta.yavol);
                const designation = getValue(meta.ix2wi);

                // Get interests - handle both array of strings and comma-separated string
                let rawInterests = meta.wci6f || "";
                let interestList: string[] = [];

                if (Array.isArray(rawInterests)) {
                    rawInterests.forEach((item: any) => {
                        if (typeof item === 'string') {
                            interestList.push(...item.split(/[,\n;]+/).map(s => s.trim()));
                        }
                    });
                } else if (typeof rawInterests === 'string') {
                    interestList = rawInterests.split(/[,\n;]+/).map(s => s.trim());
                }

                const skills = interestList.filter(s => s !== "");

                return {
                    id: entry.id,
                    mentorId: entry.id,
                    empId: "",
                    visibility: "Public",
                    name: name,
                    email: email,
                    phone: phone,
                    profilePic: profilePic,
                    signature: signature,
                    bio: bio,
                    qualification: qualification,
                    passingYear: passingYear,
                    affiliation: affiliation,
                    department: department,
                    gstNo: gstNo,
                    cinNo: cinNo,
                    skills: skills,
                    subject: skills[0] || "Legal Expert",
                    dataType: "",
                    status: "Active",
                    keywords: skills,
                    preferredFeed: "",
                    empName: name,
                    slug: slug,
                    designation: designation
                };
            });
    } catch (error) {
        console.error("Error fetching mentors:", error);
        return [];
    }
}

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, BookOpen, Scale, FileText } from "lucide-react";

export default function TermsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-background">
            {/* Hero Section */}
            <section className="bg-primary text-primary-foreground py-16 mb-12">
                <div className="container px-6">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest mb-6">
                            <Scale className="h-3 w-3" />
                            Legal Documentation
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black font-heading mb-6">Terms of Service</h1>
                        <p className="text-xl text-primary-foreground/80 leading-relaxed">
                            Please read these terms and conditions carefully before using our website and services.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container px-6">
                <div className="max-w-4xl mx-auto">
                    <Card className="border-none shadow-none bg-transparent">
                        <CardContent className="p-0 space-y-12">
                            {/* Introduction */}
                            <div className="prose prose-slate max-w-none">
                                <p className="text-lg text-muted-foreground leading-relaxed italic">
                                    This Website User Agreement and the Privacy Policy lays out the terms and conditions and rules, as maybe amended and supplemented, from time to time (hereinafter referred to as the "Agreement") which shall be applicable to the access and use of the website of Centre of Legal Excellence ( Unit of Consortium eLearning Network Pvt Ltd), i.e. www.cle.clenet.in ("Website") by you, the visitor/ user ("User") of the Website.
                                </p>
                            </div>

                            {/* Section 1 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">01</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Acceptance of Terms and Modification Thereof</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        1.1 Access of the Website by the User constitutes an acknowledgement and acceptance in full, of all the terms, conditions and notices as stated in this Agreement and without any modification and/or exception by the User of this Agreement. If the User does not agree with any part of such terms, conditions and notices as stated in this Agreement in any manner, the User must not access the Website.
                                    </p>
                                    <p>
                                        1.2 Centre of Legal Excellence ( Unit of Consortium eLearning Network Pvt Ltd) reserves the right to change the terms, conditions and notices pursuant to which the Website is accessed by the User, without any notice or intimation of such change.
                                    </p>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">02</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Limited User</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        2.1 The User agrees that given the nature of the Internet, even though the Website is targeted to Indian Residents only, it may be accessed in other parts of the world. The material/information on this Website is not intended for use by persons located in, or residents in countries that restrict the distribution of such material/information or by any person in any jurisdiction where distribution or use of such material/information or usage or access of Website will be contrary to law or any regulation. It shall be the responsibility of every User to be aware of and fully observe the applicable laws and regulations of the jurisdiction which User is subject of. If the User is not an Indian resident and yet uses this Website, he acknowledges, understands and agrees that he is doing so on his own initiative and at his own risk and Consortium eLearning Network Pvt Ltd shall not be liable for violation/breach of any of the laws applicable to usage of the Website. The Website is not to be and should not be construed as purporting to offer or inviting to offer any information to residents of countries where Centre of Legal Excellence is not licensed or authorized to perform activities related to its objective.
                                    </p>
                                    <p>
                                        2.2 The User further agrees and undertakes not to reverse engineer, modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, services or intellectual property obtained from the Website in any manner whatsoever. Reproduction, copying of the content for commercial or non-commercial purposes and unwarranted modification of data and information within the content of the Website is strictly not permitted without prior written consent from Centre of Legal Excellence and/or third party owners. However, some of the content of our services or other files may be made available for download from the website which is permitted to be copied and/or used only for personal purposes of the User. The User and/or any third party is prohibited from running or displaying this Website and /or information displayed on this Website on any other Website or frames , without prior written consent from Centre of Legal Excellence.
                                    </p>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">03</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Disclaimer of Warranties</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        3.1 Centre of Legal Excellence has endeavored to ensure that all the information provided by it on this Website is correct, but it neither warrants nor makes any representations regarding the quality, accuracy or completeness of any data or information displayed on this Website and Centre of Legal Excellence shall not be, in any manner liable for inaccuracy/error if any. Centre of Legal Excellence makes no warranty, express or implied, concerning the Website and/or its contents and disclaims all warranties of fitness for a particular purpose and warranties of merchantability in respect of information displayed and communicated through or on the Website, including any liability, responsibility or any other claim, whatsoever, in respect of any loss, whether direct or consequential, to any User or any other person, arising out of or from the use of any such information as is displayed or communicated through or on the Website or the provision of the Services.
                                    </p>
                                    <p>
                                        3.2 Centre of Legal Excellence shall not be held responsible for non‐availability of the Website at any point in time for any reason whatsoever. The User understands and agrees that any material and/or data downloaded or otherwise obtained from Centre of Legal Excellence through the Website is done entirely at his discretion and risk and he will be solely responsible for any damage to his computer systems or any other loss that results from such material and/or data.
                                    </p>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">04</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Links to Third Party Sites</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        4.1 The Website may contain links to other websites or may contain features of any nature of other websites on the Website ("Linked Sites"). The Linked Sites are not under the control of Centre of Legal Excellence or the Website and Centre of Legal Excellence is not responsible for the contents of any Linked Site, including without limitation any link or advertisement contained in a Linked Site, or any changes or updates to a Linked Site. Centre of Legal Excellence is not responsible for any form of transmission, whatsoever, received by the User from any Linked Site. The inclusion of any link does not imply endorsement of any nature by Centre of Legal Excellence or the Website of the Linked Sites or any association with its operators or owners.
                                    </p>
                                    <p>
                                        4.2 Centre of Legal Excellence will be making calls and sending SMS through a thrid-party platform after The User's registration in order to provide our service. The User's registration means acceptance of the service.
                                    </p>
                                    <p>
                                        4.3 Centre of Legal Excellence is not responsible for any errors, inclusions, omissions or representations on any Linked Site, or on any link contained in a Linked Site. The User is requested to verify the accuracy of all information on his own before undertaking any reliance on such information of such products/ services that they believe may benefit the User.
                                    </p>
                                </div>
                            </div>

                            {/* Section 5 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">05</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">User's Obligations</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        5.1 As a condition of access and use of the Website, the User warrants that he will not use the Website for any purpose that is unlawful or illegal under any law for the time being in force within or outside India or prohibited by this Agreement. In addition, the Website shall not be used in any manner, which could damage, disable, overburden or impair it or interfere with any other party's use and/or enjoyment of the Website or infringe any intellectual property rights of Centre of Legal Excellence or any third party.
                                    </p>
                                </div>
                            </div>

                            {/* Section 6 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">06</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Contact Us Feature</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        6.1 The Users will be provided with Contact Us features on the Website. The Users will be able to provide their contact details to enable Centre of Legal Excellence to contact them.
                                    </p>
                                    <p>
                                        6.2 The Users may further be provided with features to contact Centre of Legal Excellence, raise queries, comments or interact with Centre of Legal Excellence. However Centre of Legal Excellence shall be at its sole discretion and be within its rights to answer, reply or opt not to reply to any such queries or comments.
                                    </p>
                                    <p>
                                        6.3 By using the said features, User permits Centre of Legal Excellence to contact them on their registered details, for any clarification or to offer any other service from time to time.
                                    </p>
                                </div>
                            </div>

                            {/* Section 7 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">07</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Breach</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        7.1 Without prejudice to the other remedies available to Centre of Legal Excellence under this Agreement or under applicable law, Centre of Legal Excellence may limit the User's activity, warn other Users of the User's actions, immediately temporarily / indefinitely suspend or terminate the User's use of the Website, and/or refuse to provide the User with access to the Website if the User is in breach of this Agreement.
                                    </p>
                                </div>
                            </div>

                            {/* Section 8 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">08</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Ownership and Proprietary Rights</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        8.1 The content of the Website and all copyrights, patents, trademarks, service marks, trade names and all other intellectual property rights therein are owned by Centre of Legal Excellence or validly licensed to Centre of Legal Excellence and are protected by applicable Indian and international copyright and other intellectual property law. The User acknowledges, understands and agrees that he shall not have, nor be entitled to claim, any rights in and to the Website content and/or any portion thereof.
                                    </p>
                                    <p>
                                        8.2 Some of the content on the Website have been permitted by the third party/ies to be used by Centre of Legal Excellence in such form and manner as may be desired by Centre of Legal Excellence and Centre of Legal Excellence will makes its best endeavors to give credit to such third party/ies during publication of such content on its Website. If at any point in time any dispute is raised with respect to publication of such content, by any third party, Centre of Legal Excellence shall be in its rights to remove such content or procure requisite consents from third party/ies.
                                    </p>
                                    <p>
                                        8.3 Any copyrighted or other proprietary content distributed on or through the Website with the consent of the owner must contain the appropriate copyright or other proprietary rights notice. The unauthorized submission or distribution of copyrighted or other proprietary content is illegal and could subject the User to personal liability or criminal prosecution.
                                    </p>
                                </div>
                            </div>

                            {/* Section 9 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">09</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Limitation of Liability</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        9.1 THE USER UNDERSTANDS AND EXPRESSLY AGREES THAT TO THE EXTENT PERMITTED UNDER APPLICABLE LAWS, IN NO EVENT WILL THE Centre of Legal Excellence OR ANY OF ITS AFFILIATES OR PARENT COMPANY OR ANY OF THEIR RESPECTIVE OFFICERS, EMPLOYEES, DIRECTORS, SHAREHOLDERS, AGENTS, OR LICENSORS BE LIABLE TO THE USER OR ANYONE ELSE UNDER ANY THEORY OF LIABILITY (WHETHER IN CONTRACT, TORT, STATUTORY, OR OTHERWISE) FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF REVENUES, PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF SUCH PARTIES WERE ADVISED OF, KNEW OF OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM THE USER'S USE OF OR INABILITY TO USE THE WEBSITE OR ANY PARTS THEREOF.
                                    </p>
                                </div>
                            </div>

                            {/* Section 10 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">10</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Indemnification</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        10.1 The User agrees to indemnify, defend and hold harmless Centre of Legal Excellence, its affiliates, group companies and their directors, officers, employees, agents, third party service providers, and any other third party providing any service to Centre of Legal Excellence in relation to the Website whether directly or indirectly, from and against any and all losses, liabilities, claims, damages, costs and expenses (including legal fees and disbursements in connection therewith and interest chargeable thereon) asserted against or incurred by Centre of Legal Excellence that arise out of, result from, or may be payable by virtue of, any breach or non-performance of any terms of this Agreement including any representation, warranty, covenant or agreement made or obligation to be performed by the User pursuant to this Agreement.
                                    </p>
                                </div>
                            </div>

                            {/* Section 11 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">11</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Severability</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        11.1 If any provision of this Agreement is determined to be invalid or unenforceable in whole or in part, such invalidity or unenforceability shall attach only to such provision or part of such provision and the remaining part of such provision and all other provisions of this Agreement shall continue to be in full force and effect.
                                    </p>
                                </div>
                            </div>

                            {/* Section 12 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">12</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Force Majeure</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        12.1 Centre of Legal Excellence shall not be liable for any failure to perform any of its obligations under this Agreement or provide the Services or any part thereof if the performance is prevented, hindered or delayed by a Force Majeure Event and in such case its obligations shall be suspended for so long as the Force Majeure Event continues.
                                    </p>
                                </div>
                            </div>

                            {/* Section 13 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">13</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Governing Law</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        13.1 This Agreement shall be governed by and constructed in accordance with the laws of India without reference to conflict of laws principles. In the event any dispute in relation hereto is brought by the User, it shall be subject to the exclusive jurisdiction of the courts of Delhi, India.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Footer Note */}
                    <div className="mt-20 pt-8 border-t border-slate-200">
                        <div className="flex items-center gap-4 text-muted-foreground italic">
                            <Shield className="h-5 w-5 opacity-50" />
                            <p className="text-sm">
                                Center of Legal Excellence is committed to transparency and upholding the highest standards of legal research and ethics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

import { motion } from 'framer-motion';
import { Search, TrendingUp, AlertTriangle } from 'lucide-react';

const SEOAnalysis = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section id="seo" className="section bg-white">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="section-header center"
                >
                    <span className="badge badge-success">Steg 2</span>
                    <h2>SEO &amp; Google-Synlighet</h2>
                    <p className="subtitle">
                        Hvordan ser folk dere når de søker? Vi har analysert over 69 søkeord.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="seo-grid"
                >
                    <motion.div variants={item} className="card highlight-card">
                        <div className="card-icon"><TrendingUp size={32} /></div>
                        <h3>Hva dere er gode på</h3>
                        <p>
                            Dere er sterke på merkevare. Når noen søker etter "Oslo Helsestudio" (Rank 4) eller "Oslo Kvinnehelsesenter" (Rank 6), finner de dere raskt.
                        </p>
                        <div className="keyword-list">
                            <span className="keyword-tag">oslo helsestudio <span className="rank rank-high">#4</span></span>
                            <span className="keyword-tag">oslohelsestudio fyrstikktorget <span className="rank rank-high">#11</span></span>
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="card highlight-card">
                        <div className="card-icon"><Search size={32} /></div>
                        <h3>Hvor potensialet ligger</h3>
                        <p>
                            Dere sliter med å nå opp på de brede søkene der folk leter etter hjelp og ikke et spesifikt navn (Side 2-10 i Google):
                        </p>
                        <div className="keyword-list">
                            <span className="keyword-tag">gravid forstoppelse <span className="rank rank-low">#20</span></span>
                            <span className="keyword-tag">fødselsforberedende kurs <span className="rank rank-low">#48</span></span>
                            <span className="keyword-tag">trening gravid <span className="rank rank-low">#84</span></span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="alert-box danger mt-6 glass-panel"
                >
                    <div className="alert-header">
                        <AlertTriangle size={40} className="alert-icon" />
                        <div>
                            <h3>Kritisk SEO-Problem: "Den Doble Nettsiden"</h3>
                        </div>
                    </div>
                    <div className="alert-body">
                        <p className="lead-text">
                            Akkurat nå konkurrerer <strong>oslokvinnehelse.no</strong> og <strong>oslohelsestudio.no</strong> mot hverandre.
                            Siden de deler nesten identiske artikler, straffer Google sidene ved å kalle det "Duplikat innhold" (kopiert tekst).
                        </p>
                        <div className="solution-box">
                            <h4>🔍 Se domenestrategi-seksjonen øverst for de to løsningsalternativene.</h4>
                            <p>
                                Dere har to gode veier videre — slå sammen til ett domene, eller beholde to helt unike sider.
                                Se «Domenestrategi — Velg Retning» øverst på siden.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SEOAnalysis;

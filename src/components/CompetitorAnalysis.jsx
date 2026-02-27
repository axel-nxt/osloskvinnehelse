import { motion } from 'framer-motion';
import { Target, Users, MapPin, ArrowRight } from 'lucide-react';

const CompetitorAnalysis = () => {
    return (
        <section id="konkurrent" className="section bg-gradient">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <span className="badge badge-primary">Steg 3</span>
                    <h2>Kampen mot Konkurrentene</h2>
                    <p className="subtitle">
                        Hvorfor vinner <a href="#">Oslo Kvinnehelsesenter</a> i dag, og hvordan slår vi dem?
                    </p>
                </motion.div>

                <div className="vs-battle">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="card competitor-card us"
                    >
                        <h3>Oslo Kvinnehelse</h3>
                        <div className="big-number">~232</div>
                        <p className="stat-label">Estimerte månedlige besøk fra organisk søk</p>
                        <ul className="traits">
                            <li>Mye trafikk fra bloggartikler</li>
                            <li>"Trening etter keisersnitt" (Nasjonal trafikk)</li>
                            <li>Mangler lokale "kjøpeklare" søkere</li>
                        </ul>
                    </motion.div>

                    <div className="vs-badge">VS</div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="card competitor-card them"
                    >
                        <h3>Oslo Kvinnehelsesenter</h3>
                        <div className="big-number">~1368</div>
                        <p className="stat-label">Estimerte månedlige besøk fra organisk søk</p>
                        <ul className="traits">
                            <li>Dominerer med kommersielle, lokale søk</li>
                            <li>"Massasje Røa", "Barseltrening Oslo"</li>
                            <li>Egne, sterke tjenestesider</li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="action-plan mt-8"
                >
                    <h3>Slik vinner vi kampen: Handlingsplan</h3>
                    <div className="plan-grid">
                        <div className="plan-card">
                            <div className="icon-wrapper"><Target /></div>
                            <h4>1. Dedikerte Tjenestesider</h4>
                            <p>Konverter blogginnlegg om spesifikke behandlinger over til rene landingssider for salg.</p>
                        </div>
                        <div className="plan-card">
                            <div className="icon-wrapper"><MapPin /></div>
                            <h4>2. Lokal SEO i Oslo</h4>
                            <p>Konsekvent inkludere "Oslo", "Grünerløkka", og "Fyrstikktorget" i Tittel-tags og Overskrifter.</p>
                        </div>
                        <div className="plan-card">
                            <div className="icon-wrapper"><Users /></div>
                            <h4>3. Sterkere Call-to-actions</h4>
                            <p>Bruk den eksisterende bloggtrafikken! Vi må ha store, klikkbare "Bestill Time" knapper i artiklene.</p>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <button className="btn btn-primary btn-large">
                            Bestill time <ArrowRight size={20} className="ml-2" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CompetitorAnalysis;

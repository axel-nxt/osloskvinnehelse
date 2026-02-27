import { motion } from 'framer-motion';
import { AlertTriangle, AlertCircle, Info, Zap } from 'lucide-react';

const TechnicalAnalysis = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section id="teknisk" className="section bg-light">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <span className="badge badge-warning">Steg 1</span>
                    <h2>Teknisk Tilstand</h2>
                    <p className="subtitle">
                        Dette er helsen til selve nettsiden din. En rask og feilfri nettside er grunnmuren for å lykkes i Google.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid-3"
                >
                    {/* Card 1: 4xx Errors */}
                    <motion.div variants={item} className="card issue-card danger">
                        <div className="card-icon"><AlertCircle size={32} /></div>
                        <h3>Døde lenker (404-feil)</h3>
                        <span className="badge badge-danger">Kritisk Feil</span>
                        <div className="issue-content">
                            <p><strong>Problemet:</strong> Rundt 3000 interne lenker peker til sider som ikke finnes (timet ut eller 404-feil).</p>
                            <p><strong>Hvorfor det er dumt:</strong> Det skaper en dårlig brukeropplevelse og Google "slutter" å lese nettsiden din ordentlig.</p>
                            <p><strong>Løsning:</strong> Rydde opp eller slette de døde lenkene slik at alt peker til riktige sider.</p>
                        </div>
                    </motion.div>

                    {/* Card 2: PageSpeed */}
                    <motion.div variants={item} className="card issue-card warning">
                        <div className="card-icon"><Zap size={32} /></div>
                        <h3>Nettsidens Hastighet</h3>
                        <span className="badge badge-warning">Bør Forbedres</span>
                        <div className="issue-content">
                            <p><strong>Problemet:</strong> Treg innlasting. Store bilder og "tunge" koder som bremser siden.</p>
                            <p><strong>Hvorfor det er dumt:</strong> Kunder klikker seg vekk om det tar for lang tid. Google gir tregere sider lavere plassering.</p>
                            <p><strong>Løsning:</strong> Komprimere bilder, implementere raskere bildeinnlasting (WebP) og fjerne unødvendig kode.</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Sidetitler */}
                    <motion.div variants={item} className="card issue-card warning">
                        <div className="card-icon"><AlertTriangle size={32} /></div>
                        <h3>Sidetitler og H1</h3>
                        <span className="badge badge-warning">Bør Forbedres</span>
                        <div className="issue-content">
                            <p><strong>Problemet:</strong> Ca. 40 sider har enten for korte titler, for lange titler, mangler hovedoverskrift (H1) eller er helt like (dupliserte).</p>
                            <p><strong>Hvorfor det er dumt:</strong> Sidetittelen er det <em>første</em> Google leser. Er den feil, forstår de ikke hva siden handler om.</p>
                            <p><strong>Løsning:</strong> Skrive unike, presise titler (40-60 tegn) for hver eneste side.</p>
                        </div>
                    </motion.div>

                    {/* Card 4: Low hanging fruits */}
                    <motion.div variants={item} className="card issue-card info">
                        <div className="card-icon"><Info size={32} /></div>
                        <h3>Raske Forbedringer</h3>
                        <span className="badge badge-success">Enkel Fiks</span>
                        <div className="issue-content">
                            <p><strong>Bildebeskrivelser (Alt-tekst):</strong> 30 000 bilder (!) mangler en kort beskrivelse av hva de forestiller. </p>
                            <p><strong>Søkebeskrivelse (Meta Description):</strong> 40 sider mangler en salgende setning for Google-søk. Viktig for å få folk til å klikke på akkurat din lenke.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechnicalAnalysis;

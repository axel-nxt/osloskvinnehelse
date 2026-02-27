import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const actions = [
    {
        title: 'Velg domenestrategi (A eller B)',
        desc: 'Enten samle begge domenene til ett flaggskip, eller beholde to separate sider med 100 % unikt innhold. Begge fungerer — men dere må velge én og følge den konsekvent.',
        priority: 'Kritisk',
        type: 'danger',
    },
    {
        title: 'Fiks 3000 døde lenker',
        desc: 'Oppdater eller slett alle interne lenker som peker til ikke-eksisterende sider.',
        priority: 'Høy',
        type: 'danger',
    },
    {
        title: 'Optimaliser bilder og hastighet',
        desc: 'Konverter til WebP-format og implementer lazy loading for raskere innlasting.',
        priority: 'Høy',
        type: 'warning',
    },
    {
        title: 'Skriv unike sidetitler',
        desc: 'Alle 40+ sider mangler unike, søkeordoptimaliserte titler på 40–60 tegn.',
        priority: 'Høy',
        type: 'warning',
    },
    {
        title: 'Opprett dedikerte tjenestesider',
        desc: 'Egne sider for Barseltrening, Gravidmassasje, Fysioterapi — med "Bestill time"-knapp.',
        priority: 'Middels',
        type: 'success',
    },
    {
        title: 'Lokal SEO — Oslo-ord overalt',
        desc: 'Inkluder "Oslo", "Grünerløkka", "Fyrstikktorget" i titler, H1 og Meta Descriptions.',
        priority: 'Middels',
        type: 'success',
    },
];

const priorityColors = {
    danger: 'badge-danger',
    warning: 'badge-warning',
    success: 'badge-success',
};

const Summary = () => (
    <section id="tiltak" className="section bg-dark">
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-header center"
            >
                <span className="pill-badge pill-badge--light">Sammendrag</span>
                <h2 style={{ color: '#fff', marginTop: '16px' }}>Tiltaklisten — Alt på ett sted</h2>
                <p className="subtitle" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    Her er de prioriterte oppgavene sortert etter viktighet. Start øverst og jobb deg nedover.
                </p>
            </motion.div>

            <div className="action-list">
                {actions.map((action, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="action-row"
                    >
                        <CheckCircle size={22} className={`action-icon action-icon--${action.type}`} />
                        <div className="action-text">
                            <div className="action-title-row">
                                <strong>{action.title}</strong>
                                <span className={`badge ${priorityColors[action.type]}`}>{action.priority}</span>
                            </div>
                            <p>{action.desc}</p>
                        </div>
                        <ArrowRight size={18} className="action-arrow" />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Summary;

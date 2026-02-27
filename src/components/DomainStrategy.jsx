import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, GitMerge, Layers, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const DomainStrategy = () => {
    const [selected, setSelected] = useState(null); // null | 'A' | 'B'

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.12 } },
    };
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    };

    return (
        <section id="domenestrategi" className="section bg-white">
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <span className="badge badge-danger">⚠️ Kritisk Viktig</span>
                    <h2 style={{ marginTop: 12 }}>Domenestrategi — Velg Retning</h2>
                    <p className="subtitle">
                        Det største SEO-problemet deres er ikke én feil — det er at to nettsider deler identisk innhold.
                        Google straffer dette hardt. Dere må velge én av to strategier for å løse dette.
                    </p>
                </motion.div>

                {/* Root cause alert */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel alert-box danger"
                    style={{ marginBottom: 40 }}
                >
                    <div className="alert-header">
                        <AlertCircle size={28} className="alert-icon" />
                        <div>
                            <h3>Rotårsaken: Duplikat innhold på tvers av domener</h3>
                        </div>
                    </div>
                    <div className="alert-body">
                        <p className="lead-text">
                            Artiklene «Stress og stressmestring» og «Styrketrening er viktig» er i dag publisert
                            identisk på <strong>oslokvinnehelse.no</strong> og <strong>oslohelsestudio.no</strong>.
                            Når Google finner to kopier, filtrerer den vekk <em>begge</em> fra søkeresultatene.
                            Innholdssatsingen gir nulleffekt akkurat nå.
                        </p>
                        <div className="solution-box" style={{ borderColor: 'rgba(234,67,53,0.2)', background: 'rgba(234,67,53,0.04)' }}>
                            <h4 style={{ color: 'var(--danger)' }}>⚠️ Ufravikelig regel — uansett hvilket alternativ dere velger</h4>
                            <p>
                                Alt duplikatinnhold <strong>må fjernes fra én av sidene umiddelbart.</strong> All
                                fremtidig innholdsproduksjon må holdes 100 % unik per nettside. Én artikkel = ett hjem.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Toggle selector */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: 32 }}
                >
                    <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 16 }}>
                        Klikk på et alternativ for å se detaljer 👇
                    </p>
                    <div className="strategy-toggle">
                        <button
                            className={`strategy-tab${selected === 'A' ? ' active-a' : ''}`}
                            onClick={() => setSelected(selected === 'A' ? null : 'A')}
                        >
                            <GitMerge size={18} />
                            Alternativ A — Slå sammen
                        </button>
                        <button
                            className={`strategy-tab${selected === 'B' ? ' active-b' : ''}`}
                            onClick={() => setSelected(selected === 'B' ? null : 'B')}
                        >
                            <Layers size={18} />
                            Alternativ B — To separate sider
                        </button>
                    </div>
                </motion.div>

                {/* Side-by-side cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="strategy-grid"
                >
                    {/* ALT A */}
                    <motion.div
                        variants={item}
                        className={`strategy-card strategy-card--a${selected === 'A' ? ' is-selected' : ''}${selected === 'B' ? ' is-dimmed' : ''}`}
                        onClick={() => setSelected(selected === 'A' ? null : 'A')}
                    >
                        <div className="strategy-card-header">
                            <div className="strategy-icon strategy-icon--a">
                                <GitMerge size={24} />
                            </div>
                            <div>
                                <span className="strategy-label">Alternativ A</span>
                                <h3>Slå sammen til én sterk nettside</h3>
                            </div>
                        </div>
                        <p className="strategy-desc">
                            Gjør <strong>oslokvinnehelse.no</strong> til flaggskipet og flytt all studioinfo inn
                            under <code>oslokvinnehelse.no/studio/</code>. Sett opp en<br />
                            <strong>301-redirect</strong> fra oslohelsestudio.no til den nye adressen.
                        </p>
                        <ul className="strategy-pros">
                            <li><CheckCircle size={14} /> All SEO-kraft samles — raskere og sterkere rangeringer</li>
                            <li><CheckCircle size={14} /> Halverer vedlikehold (én nettside, én strategi)</li>
                            <li><CheckCircle size={14} /> Studionavnet beholdes som merkevare på gensere, skilter osv.</li>
                        </ul>
                        <ul className="strategy-cons">
                            <li><XCircle size={14} /> OsloHelsestudio mister eget domene og nettidentitet</li>
                            <li><XCircle size={14} /> Passer best om begge virksomheter driftes som én enhet</li>
                        </ul>
                    </motion.div>

                    {/* ALT B */}
                    <motion.div
                        variants={item}
                        className={`strategy-card strategy-card--b${selected === 'B' ? ' is-selected' : ''}${selected === 'A' ? ' is-dimmed' : ''}`}
                        onClick={() => setSelected(selected === 'B' ? null : 'B')}
                    >
                        <div className="strategy-card-header">
                            <div className="strategy-icon strategy-icon--b">
                                <Layers size={24} />
                            </div>
                            <div>
                                <span className="strategy-label">Alternativ B</span>
                                <h3>To separate sider med tydelig fordeling</h3>
                            </div>
                        </div>
                        <p className="strategy-desc">
                            Behold begge domenene, men gjør dem <strong>100% ulike</strong> — ulike målgrupper,
                            ulikt innhold, absolutt null overlapp.
                        </p>

                        {/* Comparison table */}
                        <div className="comparison-table">
                            <div className="comparison-header">
                                <span></span>
                                <span>oslokvinnehelse.no</span>
                                <span>oslohelsestudio.no</span>
                            </div>
                            <div className="comparison-row">
                                <span>Målgruppe</span>
                                <span>Kvinner — helse, fødsel, graviditet</span>
                                <span>Alle — trening og helse generelt</span>
                            </div>
                            <div className="comparison-row">
                                <span>Innhold</span>
                                <span>Bekkenbunn, hormoner, fødsel</span>
                                <span>Styrketrening, kondis, kosthold</span>
                            </div>
                            <div className="comparison-row">
                                <span>Tone</span>
                                <span>Klinisk, omsorgsfull</span>
                                <span>Energisk, inkluderende</span>
                            </div>
                        </div>

                        <ul className="strategy-pros">
                            <li><CheckCircle size={14} /> Dobbel tilstedeværelse i Google — to sjanser til å dukke opp</li>
                            <li><CheckCircle size={14} /> Tydelig merkevareforskjell, ingen forvirring</li>
                            <li><CheckCircle size={14} /> Studioet kan nå bredere målgruppe</li>
                        </ul>
                        <ul className="strategy-cons">
                            <li><XCircle size={14} /> Krever dobbel innsats for innhold og vedlikehold</li>
                            <li><XCircle size={14} /> Tar lengre tid å bygge autoritet på begge domenene</li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Expanded detail panel */}
                <AnimatePresence>
                    {selected && (
                        <motion.div
                            key={selected}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: 'hidden', marginTop: 24 }}
                        >
                            <div className={`strategy-detail strategy-detail--${selected.toLowerCase()}`}>
                                {selected === 'A' ? (
                                    <>
                                        <h4>🅐 Slik gjennomfører dere Alternativ A — steg for steg</h4>
                                        <ol>
                                            <li>Gjør <strong>oslokvinnehelse.no</strong> til hovedflaggskipet (klinikknavnet har mer medisinsk tyngde i SEO).</li>
                                            <li>Flytt all info om treningsstudioet inn som en seksjon: <code>oslokvinnehelse.no/studio/</code></li>
                                            <li>Sett opp en <strong>301 Permanent Redirect</strong> fra oslohelsestudio.no → ny studio-URL.</li>
                                            <li><strong>Effekt:</strong> All SEO-kraft, besøkshistorikk og lenker fra studiodomenet overføres automatisk til det samlede domenet.</li>
                                        </ol>
                                    </>
                                ) : (
                                    <>
                                        <h4>🅑 Slik gjennomfører dere Alternativ B — viktigste krav</h4>
                                        <ol>
                                            <li>Slett eller flytt <strong>alt duplikatinnhold</strong> umiddelbart. Start med å identifisere alle artikler som finnes på begge sidene.</li>
                                            <li>Definer en klar redaksjonell linje per nettsted — hvem skriver hva, for hvem.</li>
                                            <li>Bygg innholdskalendere som holder de to sidene 100% separate fra hverandre.</li>
                                            <li>Følg samme SEO-tiltak (Tiltak 2–4 under) for begge nettsteder, men med unik vinkling.</li>
                                        </ol>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default DomainStrategy;

import SectionTitle from '@/components/ui/SectionTitle';
import { PROCESS_STEPS } from '@/lib/data';
export default function Process() {
  return <section id="surec" className="section-space bg-white"><div className="site-container"><SectionTitle label="Nasıl çalışırız?" title="Keşiften teslimata, adım adım" align="left" /><ol className="process-grid">{PROCESS_STEPS.map(step => <li key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol></div></section>;
}

import SectionTitle from '@/components/ui/SectionTitle';
import { PROCESS_STEPS } from '@/lib/data';

export default function Process() {
  return <section id="surec" className="process-section"><div className="site-container">
    <SectionTitle label="Nasıl çalışırız?" title="Keşiften teslimata, adım adım" subtitle="Projenizi dinliyor, zemininizi hazırlıyor ve uygulamayı özenle tamamlıyoruz." align="left" dark />
    <ol className="process-steps">{PROCESS_STEPS.map(step => <li key={step.number}><span className="process-number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
  </div></section>;
}

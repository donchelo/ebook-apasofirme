import React from 'react';
import LandingTemplate from '../components/templates/LandingTemplate';
import Typography from '../components/atoms/Typography';

const PrivacyPage = ({ onNavigate }: { onNavigate: (page: 'landing' | 'terms' | 'privacy') => void }) => {
  return (
    <LandingTemplate onNavigate={onNavigate}>
      <div className="py-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <Typography variant="h1" className="mb-12">Política de Privacidad</Typography>
          
          <div className="space-y-8 text-brand-dark/70">
            <section>
              <Typography variant="h3" className="text-brand-dark mb-4">1. Recolección de Información</Typography>
              <Typography variant="body">
                Recopilamos información básica necesaria para mejorar tu experiencia. Esto incluye datos de navegación a través de Meta Pixel para entender cómo interactúas con nuestra página y datos de contacto si decides escribirnos por WhatsApp.
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-brand-dark mb-4">2. Uso de los Datos</Typography>
              <Typography variant="body">
                Tus datos se utilizan exclusivamente para:
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>Procesar y facilitar tu acceso al ebook "A Paso Firme".</li>
                  <li>Brindar soporte personalizado vía WhatsApp.</li>
                  <li>Optimizar nuestras campañas de publicidad en redes sociales.</li>
                </ul>
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-brand-dark mb-4">3. Terceros</Typography>
              <Typography variant="body">
                No vendemos tus datos a terceros. Sin embargo, utilizamos plataformas seguras para el procesamiento de pagos (Hotmart) y herramientas de análisis (Meta Pixel) que tienen sus propias políticas de privacidad.
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-brand-dark mb-4">4. Contacto</Typography>
              <Typography variant="body">
                Si tienes dudas sobre tus datos, puedes contactarnos a través de nuestro WhatsApp <span className="text-brand-accent">+57 321 829 8211</span>.
              </Typography>
            </section>
          </div>
        </div>
      </div>
    </LandingTemplate>
  );
};

export default PrivacyPage;

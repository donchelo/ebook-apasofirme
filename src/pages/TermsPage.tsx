import React from 'react';
import LandingTemplate from '../components/templates/LandingTemplate';
import Typography from '../components/atoms/Typography';

const TermsPage = ({ onNavigate }: { onNavigate: (page: 'landing' | 'terms' | 'privacy') => void }) => {
  return (
    <LandingTemplate onNavigate={onNavigate}>
      <div className="py-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <Typography variant="h1" className="mb-12">Términos y Condiciones</Typography>
          
          <div className="space-y-8 text-brand-dark/70">
            <section>
              <Typography variant="h3" className="text-brand-dark mb-4">1. Uso del Contenido</Typography>
              <Typography variant="body">
                El ebook "A Paso Firme" es para uso personal y no comercial. Queda prohibida su reproducción, distribución o venta sin autorización previa de Gabo Arriola.
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-brand-dark mb-4">2. Descargo de Responsabilidad</Typography>
              <Typography variant="body">
                Este material tiene fines educativos y de crecimiento personal basados en neurociencia y PNL. No sustituye el diagnóstico, tratamiento o asesoría de un profesional de la salud mental o médica.
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-brand-dark mb-4">3. Pagos y Devoluciones</Typography>
              <Typography variant="body">
                Todas las transacciones se realizan a través de Hotmart. Los términos de devolución y garantía están sujetos a las políticas de dicha plataforma (generalmente 7 días de garantía).
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-brand-dark mb-4">4. Propiedad Intelectual</Typography>
              <Typography variant="body">
                Todos los derechos del contenido, diseño y metodología pertenecen a Gabo Arriola.
              </Typography>
            </section>
          </div>
        </div>
      </div>
    </LandingTemplate>
  );
};

export default TermsPage;

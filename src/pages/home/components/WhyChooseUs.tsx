import { whyChooseFeatures } from '@/mocks/properties';

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-6">
              Why Choose Sedidy Homes
            </h2>
            <p className="text-foreground-500 text-lg mb-8">
              We combine market expertise, transparent practices, and client-centric
              solutions to deliver exceptional real estate experiences.
            </p>
            <div className="space-y-4">
              {whyChooseFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                    <i className={`${feature.icon} text-primary-600 text-lg`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground-950 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-foreground-500 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20elegant%20real%20estate%20office%20interior%20with%20a%20diverse%20African%20professional%20team%20discussing%20property%20plans%20around%20a%20wooden%20table%2C%20warm%20natural%20lighting%20through%20large%20windows%2C%20potted%20plants%2C%20sophisticated%20yet%20welcoming%20atmosphere%2C%20clean%20architectural%20photography%20style%2C%20warm%20neutral%20tones%2C%20high%20detail&width=800&height=500&seq=why-choose-sedidy-01&orientation=landscape"
                alt="Why Choose Sedidy Homes"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-500 text-primary-foreground rounded-lg p-6 shadow-xl max-w-xs hidden md:block">
              <p className="text-sm font-semibold mb-2">
                Over 10 Years of Excellence
              </p>
              <p className="text-xs opacity-90">
                Trusted by thousands of clients for reliable and transparent real
                estate solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
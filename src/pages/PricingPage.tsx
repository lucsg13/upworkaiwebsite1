import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, Zap, Crown, ArrowRight } from 'lucide-react';

const PLANS = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'Perfect for exploring AI‑powered plant design.',
    icon: Sparkles,
    features: [
      '5 AI generations per month',
      'Basic plant templates',
      'Community gallery access',
      'Standard resolution exports',
      'Email support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    description: 'For serious creators who need unlimited power.',
    icon: Zap,
    features: [
      'Unlimited AI generations',
      'Advanced 3D sculpting tools',
      'Priority processing queue',
      'High‑res & vector exports',
      'Custom plant DNA presets',
      'Priority support',
      'API access',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/mo',
    description: 'White‑glove service for studios and agencies.',
    icon: Crown,
    features: [
      'Everything in Pro',
      'Dedicated account manager',
      'Custom model training',
      'Team collaboration (up to 25)',
      'SSO & advanced security',
      'SLA guarantee',
      'On‑premise deployment option',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="px-4 sm:px-6 lg:px-16 pb-16 sm:pb-24">
      {/* Header */}
      <div className="text-center pt-8 sm:pt-12 pb-12 sm:pb-16 max-w-2xl mx-auto">
        <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/50 mb-4 font-semibold">
          Pricing Plans
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.04em] text-white leading-[1.1] mb-6">
          Choose your <br className="hidden sm:block" />
          <em className="font-serif italic text-white/80 font-normal">creative tier</em>
        </h1>
        <p className="text-sm sm:text-base text-white/60 max-w-lg mx-auto leading-relaxed">
          Scale from hobby to enterprise with transparent, flexible pricing. No hidden fees.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className={`text-sm transition-colors ${!annual ? 'text-white' : 'text-white/50'}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-14 h-7 rounded-full transition-colors cursor-pointer ${
              annual ? 'bg-white/20' : 'bg-white/10'
            }`}
          >
            <div
              className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
                annual ? 'left-8' : 'left-1'
              }`}
            />
          </button>
          <span className={`text-sm transition-colors ${annual ? 'text-white' : 'text-white/50'}`}>
            Annual <span className="text-[10px] text-white/40 ml-1">save 20%</span>
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
        {PLANS.map((plan) => {
          const Icon = plan.icon;
          const displayPrice =
            plan.price === 'Free'
              ? 'Free'
              : annual
              ? `$${Math.round(parseInt(plan.price.replace('$', '')) * 0.8)}`
              : plan.price;

          return (
            <div key={plan.name} className={`relative flex flex-col ${plan.highlighted ? 'md:-mt-4' : ''}`}>
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 liquid-glass rounded-full px-4 py-1 text-[10px] tracking-wider uppercase text-white/90 font-semibold z-10">
                  Most Popular
                </div>
              )}
              <div
                className={`${
                  plan.highlighted ? 'liquid-glass-strong' : 'liquid-glass'
                } rounded-3xl p-6 sm:p-8 flex flex-col flex-1 !overflow-visible ${
                  plan.highlighted ? 'md:pb-12' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-lg font-medium text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-white/50 mb-6 leading-relaxed">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-medium text-white tracking-tight">
                    {displayPrice}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-white/50 ml-1">{annual ? '/yr' : plan.period}</span>
                  )}
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-white/70 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="#"
                  className={`${
                    plan.highlighted ? 'liquid-glass-strong' : 'liquid-glass'
                  } rounded-full py-3 px-6 text-center text-sm font-medium text-white/90 hover:scale-105 active:scale-95 transition-transform cursor-pointer flex items-center justify-center gap-2`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

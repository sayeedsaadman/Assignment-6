import React from "react";

const PricingSection = () => {
  return (
    <div className="w-full bg-[#ffffff] py-16 px-4 flex flex-col items-center">
      
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 text-center">
        Simple, Transparent Pricing
      </h1>
      <p className="mt-4 text-sm md:text-base text-slate-500 text-center">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className="mt-12 flex flex-col md:flex-row gap-6 w-full max-w-6xl justify-center">

        <div className="bg-[#f6f6f8] border border-slate-200 rounded-2xl p-6 flex-1 shadow-sm">
          <h2 className="text-2xl font-bold">Starter</h2>
          <p className="text-sm text-slate-500 mt-2">Perfect for getting started</p>

          <div className="mt-6 flex items-end gap-1">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-sm text-slate-500">/Month</span>
          </div>

          <ul className="mt-6 space-y-3 text-sm text-slate-500">
            <li>✓ Access to 10 free tools</li>
            <li>✓ Basic templates</li>
            <li>✓ Community support</li>
            <li>✓ 1 project per month</li>
          </ul>

          <button className="mt-25 w-full py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold">
            Get Started Free
          </button>
        </div>

        {/* Pro */}
        <div className="relative bg-linear-to-br from-violet-600 via-fuchsia-700 to-purple-600 text-white rounded-2xl p-6 flex-1 shadow-lg">
          <div className="absolute -top-3 inset-x-0 flex justify-center">
  <div className="bg-yellow-300 text-amber-700 text-xs px-3 py-1 rounded-full">
    Most Popular
  </div>
</div>

          <h2 className="text-2xl font-bold">Pro</h2>
          <p className="text-sm text-white/70 mt-2">Best for professionals</p>

          <div className="mt-6 flex items-end gap-1">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-sm text-white/80">/Month</span>
          </div>

          <ul className="mt-6 space-y-3 text-sm">
            <li>✓ Access to all premium tools</li>
            <li>✓ Unlimited templates</li>
            <li>✓ Priority support</li>
            <li>✓ Unlimited projects</li>
            <li>✓ Cloud sync</li>
            <li>✓ Advanced analytics</li>
          </ul>

          <button className="mt-8 w-full py-3 rounded-full bg-white text-violet-600 font-semibold">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-[#f6f6f8] border border-slate-200 rounded-2xl p-6 flex-1 shadow-sm">
          <h2 className="text-2xl font-bold">Enterprise</h2>
          <p className="text-sm text-slate-500 mt-2">For teams and businesses</p>

          <div className="mt-6 flex items-end gap-1">
            <span className="text-4xl font-bold">$99</span>
            <span className="text-sm text-slate-500">/Month</span>
          </div>

          <ul className="mt-6 space-y-3 text-sm text-slate-500">
            <li>✓ Everything in Pro</li>
            <li>✓ Team collaboration</li>
            <li>✓ Custom integrations</li>
            <li>✓ Dedicated support</li>
            <li>✓ SLA guarantee</li>
            <li>✓ Custom branding</li>
          </ul>

          <button className="mt-8 w-full py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default PricingSection;

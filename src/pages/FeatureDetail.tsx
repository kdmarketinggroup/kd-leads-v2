import { useParams, Link } from "react-router-dom";
import { FEATURES } from "../data/features";

const FeatureDetail = () => {
  const { slug } = useParams();
  const feature = FEATURES.find(f => f.slug === slug);

  if (!feature) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center">
        <p className="text-xl">Feature not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/#features"
          className="text-sm text-[#d4af77] mb-6 inline-block"
        >
          ← Back to all features
        </Link>

        <h1 className="text-5xl font-bold mb-6">{feature.title}</h1>
        <p className="text-xl text-gray-400 mb-10">{feature.desc}</p>

        <img
          src={feature.img}
          alt={feature.title}
          className="rounded-3xl border border-white/10 shadow-2xl"
        />
      </div>
    </div>
  );
};

export default FeatureDetail;

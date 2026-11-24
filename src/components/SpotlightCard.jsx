const SpotlightCard = ({ children, className = "" }) => {
  const moveSpotlight = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <article
      onPointerMove={moveSpotlight}
      className={`spotlight-card rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-emerald-400/30 ${className}`}
    >
      {children}
    </article>
  );
};

export default SpotlightCard;

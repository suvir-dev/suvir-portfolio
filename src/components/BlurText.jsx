const BlurText = ({ text, delay = 80, className = "" }) => {
  return (
    <p className={className} aria-label={text}>
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden="true"
          className="mr-[0.25em] inline-block animate-blur-reveal"
          style={{ animationDelay: `${index * delay}ms` }}
        >
          {word}
        </span>
      ))}
    </p>
  );
};

export default BlurText;

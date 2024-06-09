const SectionHeading = ({ title }: { title: string }) => {
  return (
    <h2 className="mb-3 text-2xl font-bold leading-[1.2] text-dark sm:text-3xl md:text-4xl">
      {title}
    </h2>
  );
};
export default SectionHeading;

const SectionHeading = ({ title }: { title: string }) => {
  return (
    <h2 className="mb-3 text-xl font-bold leading-[1.2] text-dark sm:text-3xl md:text-3xl">
      {title}
    </h2>
  );
};
export default SectionHeading;

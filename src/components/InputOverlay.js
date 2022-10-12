export const InputOverlay = ({
  children,
  label,
  inputContainerClasses = ``,
  error,
  PairComponent,
  ...props
}) => {
  // console.log(`🚀 ~ error`, error);
  return (
    <div className={`flex flex-col gap-2 relative ${inputContainerClasses}`}>
      {label ? <p className="text-grey-100">{label}</p> : null}
      <div className="gap-2 relative w-full">
        {children}
        {PairComponent ? <PairComponent error={error} {...props} /> : null}
      </div>
    </div>
  );
};

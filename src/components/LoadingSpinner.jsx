const LoadingSpinner = () => {
  return (
    <div className="w-full h-full text-2xl text-slate-200 bg-transparent flex items-center justify-center my-auto">
      <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-main-yellow"></div>
    </div>
  );
};

export default LoadingSpinner;

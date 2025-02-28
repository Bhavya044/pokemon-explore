import { useRouter } from 'next/navigation';
import ForwardArrowIcon from '../icons/ForwardArrow';

const NavigationButton = ({
  direction,
  id,
}: {
  direction: 'Prev' | 'Next';
  id: number;
}) => {
  const router = useRouter();

  //navigate to previous or next Pokemon by ID
  const handleNavigation = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <button
      onClick={() => handleNavigation(id)}
      className={`${
        direction === 'Prev'
          ? ' hover:bg-red-600 bg-red-500 '
          : 'bg-black hover:bg-blue-600'
      } text-white text-sm  px-3 py-1 rounded-full shadow-lg transition-all flex items-center gap-2`}
    >
      {direction === 'Prev' && (
        <ForwardArrowIcon
          fill="white"
          height={10}
          className="rotate-180"
          width={10}
        />
      )}
      {direction} #{id}
      {direction === 'Next' && (
        <ForwardArrowIcon fill="white" height={10} width={10} />
      )}
    </button>
  );
};

export default NavigationButton;

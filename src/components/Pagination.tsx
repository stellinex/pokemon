import Link from 'next/link';

export const Pagination = ({ page }: { page: string }) => {
  return (
    <div className="flex justify-between mt-4 mr-auto">
      {Number(page) > 1 && (
        <Link className="hover:text-blue-700 hover:underline" href={`/list/${Number(page) - 1}`}>
          Previous 12
        </Link>
      )}
      {Number(page) < 50 && (
        <Link
          className="hover:text-blue-700 hover:underline ml-auto"
          href={`/list/${Number(page) + 1}`}
        >
          Next 12
        </Link>
      )}
    </div>
  );
};

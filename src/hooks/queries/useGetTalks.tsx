import { useInfiniteQuery, useQuery } from 'react-query';
import UsersApi from '../../apis/UsersApi';
import { InfiniteData } from 'react-query';
import { ITalk } from '../../apis/type/users';
import { useInView } from 'react-intersection-observer';
import { ReactElement, useEffect } from 'react';

type InfiniteTalkType = {
  talkList: ITalk[];
  lastId: number;
  isLast: boolean;
};

const useGetTalks = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<
    InfiniteTalkType,
    unknown
  >(['talks'], UsersApi.getTalks, {
    getNextPageParam: (lastPage) => lastPage.lastId,
    //refetchInterval: 5000,
  });

  const Observation = (): ReactElement => {
    const [ref, inView] = useInView();

    useEffect(() => {
      if (!data) return;

      const pageLastIdx = data.pages.length - 1;
      const isLast = data?.pages[pageLastIdx].isLast;
      if (!isLast && inView) fetchNextPage();
    }, [inView]);

    return <div className="asfd" ref={ref} style={{ height: '20px' }} />;
  };

  return { data, fetchNextPage, isFetchingNextPage, Observation };
};

export default useGetTalks;

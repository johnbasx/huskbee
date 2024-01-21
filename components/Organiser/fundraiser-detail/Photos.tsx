import { BASE_URL, CROWDFUNDING_BASE_URL } from '@constants/api-urls';

import AddMorePhoto from './AddMorePhoto';
import { Dispatch } from 'react';
import { FundraiserPhotoType } from '../../../pages/organiser/fundraiser-detail/[fundraiserId]';
import Image from 'next/image';
import axios from 'axios';
import { orgTokenStore } from '@store/index';
import toast from 'react-hot-toast';

type Photosprop = {
  fundraiserId: string;
  title: string;
  photos: FundraiserPhotoType[];
  setFundraiserPhoto: Dispatch<FundraiserPhotoType[]>;
};

type onClickParamType = {
  e: React.MouseEvent;
  photoId: string;
};

const Photos = ({
  fundraiserId,
  title,
  photos,
  setFundraiserPhoto,
}: Photosprop) => {
  const { token } = orgTokenStore();

  const handleDelete = async ({ e, photoId }: onClickParamType) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `${CROWDFUNDING_BASE_URL}delete-fundraiser-photo/${photoId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newList = photos.filter((photo) => photo.id !== photoId);
      setFundraiserPhoto(newList);
      toast.success('Photo deleted');
    } catch (e) {
      toast.error('Cannot delete Photo');
      console.log(e);
    }
  };
  return (
    <div className='border bg-white p-8 shadow sm:rounded-lg'>
      <div className='flex justify-between'>
        <span className='text-xl font-bold text-black'>Photos for {title}</span>
        {photos.length > 0 && (
          <AddMorePhoto
            fundraiserPhotos={photos}
            setFundraiserPhoto={setFundraiserPhoto}
            fundraiserId={fundraiserId}
          />
        )}
      </div>
      <div className='mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2'>
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <div key={photo.id} className='border'>
              <Image
                alt={`${index}fundraiserPhoto`}
                src={BASE_URL + photo.photo}
                height={500}
                width={500}
              />
              <button
                type='button'
                onClick={(e) => handleDelete({ e: e, photoId: photo.id })}
                className='cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div>
            <span className='text-black'>No photos to show</span>{' '}
            <AddMorePhoto
              fundraiserPhotos={photos}
              setFundraiserPhoto={setFundraiserPhoto}
              fundraiserId={fundraiserId}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Photos;
